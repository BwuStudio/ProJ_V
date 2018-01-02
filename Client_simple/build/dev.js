const exec = require('child_process').exec;




// let webpack = exec('webpack ', (error, stdout, stderr)=> {
//   if (error) {
//     console.log(error.stack);
//     console.log('Error code: ' + error.code);
//   }
//   console.log('Child Process STDOUT: ' + stdout);
// });

 
let koa = exec('node ../../Service/server/app.js', (error, stdout, stderr)=> {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
  }
  console.log('Child Process STDOUT: ' + stdout);
});