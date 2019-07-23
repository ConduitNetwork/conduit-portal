'use strict';

const s3      = require( './aws' ).s3;
const slurm   = require( './slurm' );
const modules = require( './modules' );
const del     = require( 'del' );
const fs      = require( 'fs' );

const SSH     = require( 'ssh2' ).Client;
const rsync   = require( './rsync' );

const tmp     = process.env.TMP_DIRECTORY;

exports.run = async ( job ) => {
  const ssykey  = await s3.getObject({ Bucket: "conduit-keys", Key: 'supercloud' }).promise()

  const SSHConfig = {
    port:       22,
    host:      'txe1-login.mit.edu',
    username:  'rbrown',
    privateKey: ssykey.Body
  }
  const destination = `${SSHConfig.username}@${SSHConfig.host}:/home/gridsan/${SSHConfig.username}/${tmp}/jobs`;


  // Download files from S3
  const getFiles = job => {
    return Promise.all([
      s3.getObject({ Bucket: "superconduit", Key: job.script }).promise(),
      s3.getObject({ Bucket: "superconduit", Key: job.data   }).promise()
    ])
  }

  // Upload new files to S3
  const uploadFiles = dir => {
    return new Promise(( resolve, reject ) => {
      fs.readdir( dir, (err, files) => {
        if( err ) reject( err )
        else {
          let promises = [];

          for( let filename of files ) {
            let path = (`${dir}/${filename}`)

            fs.readFile( path, ( err, file ) => {
              if( err ) throw Error( err )
              else {
                promises.push( s3.upload({
                  Bucket: 'superconduit',
                  Key: path.replace(`${tmp}/`, ''),
                  Body: file
                }, {
                  partSize: 10 * 1024 * 1024,
                  queueSize: 1
                }).promise())
              }
            })
          }
          Promise.all( promises )
          .then( data => {
            del([ `${dir}` ], { force: true }).then(() => {
              resolve( data )
            })
            .catch( err => reject( err ))
          })
          .catch( err => reject( err ))
        }
      })
    })
  }

  const writeFiles = ( dir, job, files ) => {
    return new Promise(( resolve, reject ) => {
      fs.mkdir( `${dir}`, { recursive: true }, error => {
        if( error ) reject( error )
        else {
          // write files to local directory
          fs.writeFile(`${dir}/${job.script}`, files[0].Body.toString(), ( err ) => {
            if( err ) throw Error( err );
          });
          fs.writeFile(`${dir}/${job.data}`, files[1].Body.toString(), ( err ) => {
            if( err ) throw Error( err );
          });
          resolve()
        }
      })
    })
  }

  const files =  await getFiles( job )
  const jobId =  Date.now();
  const dir   = `${tmp}/jobs/job-${jobId}`

  try {
    await writeFiles( dir, job, files )

    await rsync( 'ruh', `${dir}`, destination )

    await del([ `${dir}/*` ], { force: true })
  }
  catch( err ) {
    console.log( err )
  }

  const conn = new SSH();

  conn.on('ready', () => {

    let command = `${job.language} ${job.script}`

    let execute = `module load ${modules(job.language)} && ${slurm.allocateAndRun(false, 1, dir, command)}`

    conn.exec( execute, { pty: true },
      ( err, stream ) => {
      if (err) throw Error( err );

      stream.on( 'close', async ( code, signal ) => {
        conn.end();

        try {
          await rsync( 'uh', `${destination.replace(`${tmp}/jobs`, dir)}/*`, `${dir}`)

          await uploadFiles( dir )
        }
        catch( err ) {
          console.log( err )
        }

        return console.log( 'completed job', jobId );
      })
      .on( 'data', ( data ) => {
        console.log(data.toString())
        fs.appendFile( `${dir}/log.txt`, data.toString(), ( err ) => {
          if( err ) throw Error( err );
        });
      })
      .stderr.on( 'data', ( data ) => {
        fs.appendFile( `${dir}/log.txt`, `stderr: ${data.toString()}`, ( err ) => {
          if( err ) throw Error( err );
        });
      });
    });
  })
  .connect( SSHConfig );
}
