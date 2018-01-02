const exec = require('child_process').exec;
 
var ls = exec('cross-env NODE_ENV=development webpack-dev-server --open --hot', (error, stdout, stderr)=> {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
  }
  console.log('Child Process STDOUT: ' + stdout);
});

var ls = exec('cd ../Service && npm run dev', (error, stdout, stderr)=> {
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
    }
    console.log('Child Process STDOUT: ' + stdout);
  });