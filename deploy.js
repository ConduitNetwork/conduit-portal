const command = require( 'child_process' );

let tag = `deploy-${Date.now()}`;

const commands = [
  // push any recent commits
  'git push',
  // build client assets for production
  'cd client && npm run build && cd ..',
  // copy build files to server public directory
  'cp -r client/dist public',
  // temporarily move client app source to exclude from package
  'mv client ../tmp-for-deploy',
  // package & deploy
  'npm run package && npm run deploy',
  // bring client app source back
  'mv ../tmp-for-deploy client',
  // remove public directory
  'rm -rf public'
]

commands.forEach( c => {
  command.execSync( c, { stdio: [ 0,1,2 ] });
})
