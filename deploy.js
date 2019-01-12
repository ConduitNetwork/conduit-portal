// Deploying to Github Pages

const command = require('child_process');

// command sequence array
const commands = [
  // push commited work
  'git push',
  // stash untracked changes
  'git stash',
  // build assets
  'ng build --prod --base-href "https://conduitnetwork.github.io/conduit-portal/"',
  // remove docs folder if it exists
  'rm -rf docs',
  // copy dist to docs
  'cp -r dist docs',
  // check in new docs folder and commit with timestamp
  'git add docs',
  `git commit -m "commit for deploy: ${new Date().toUTCString()}"`,
  // "deploy"
  'git push',
  // remove dist
  'rm -rf dist'
]

// execute commands
for( let c of commands ) {
  command.execSync( c, { stdio:[0,1,2] });
}
