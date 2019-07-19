'use strict';

const Rsync = require( 'rsync' )

module.exports = ( flags, source, destination ) => {
  return new Promise(( resolve, reject ) => {
    let rsync = new Rsync()
      .shell( 'ssh' )
      .flags( flags )
      .source( source )
      .destination( destination );

    rsync.execute(( error, code, cmd ) => {
      if( error ) {
        reject( error )
      }
      else {
        resolve( code )
      }
    })
  })
}
