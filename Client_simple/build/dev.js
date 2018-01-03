const 
    exec = require('child_process').exec,
    spawn = require('child_process').spawn,
    path = require('path')


const 
    service_path = path.resolve(__dirname, '../../Service'),
    service = spawn(
        'cmd.exe',['/s', '/c',`"cd ${service_path} && npm run dev"`], { cwd: null, env: null, windowsVerbatimArguments: true } 
    )

service.stdout.on('data', function (data) {
    console.log(`service: ${data.toString()}`);
});

const 
    client_path = path.resolve(__dirname,'../'),
    client = spawn(
        'cmd.exe',['/s', '/c',`"cd ${client_path} && webpack-dev-server --open --hot"`], { cwd: null, env: null, windowsVerbatimArguments: true } 
    )

client.stdout.on('data', function (buffer) {
    console.log(`client: ${buffer.toString()}`);
});

