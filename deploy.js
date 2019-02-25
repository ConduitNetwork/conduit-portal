const command = require('child_process');

let tag = `deploy-${Date.now()}`
const commands = [
  'git push',
  'cd client && ng build && cd ..',
  'cp -r client/dist public',
  'mv client ../tmp-for-deploy',
  'npm run package && npm run deploy',
  'mv ../tmp-for-deploy client',
  'rm -rf public'
]
commands.forEach(c => {
  command.execSync(c, {stdio:[0,1,2]});
})
