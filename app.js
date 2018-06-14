import { normalize } from 'path';

// var url = require('url');
// var fs = require('fs');


// function renderHtml(path, response){
//     fs.readFile(path, null, function(error, data){
//         if(error){
//             reponse.writeHead(404);
//             response.write("File not found");
//         }else {
//             response.write(data);
//         }
//         response.end();
//     });
    
// }


// module.exports = {
//     handleRequest: function(request, response){
//         response.writeHead(200, {'Content-Type': 'text/html'});
  
//         var path= url.parse(request.url).pathname;
//         switch (path){
//             case '/':
//             renderHtml('./index.html', response);
//             break;
//             case '/login':
//             renderHtml('./login.html', response);
//             break;
//             default:
//             response.writeHead(404);
//             response.write("File not found and route is not defined");
//             response.end();
//         }
  
  
//     }

// };






















//#!/usr/bin/env Node

/* Module dependencies. */

var app = require('../app');
var debug = require('debug')('05-express-first-app:server');
var http = require('http');
/**
 * get port from environment and store in Express.
 */

 var port = normalizePort(process.env.port || '8000');
 app.ser('port', port);


/**
 * Create hhtp server
 */


 var server = http.createServer(app);

 /**
  * Listen on provided port on all network interface
  */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalise a port into a number, string, or false
 */


function normalizePort(val) {
    var port = parseInt(val, 10);
    
    if(isNaN(port)){
        //named pipe
        return val;
    }

    if(port>=0){
        // port number
        return port;
    }
    return false;

}


/**
 * Event Listener for http server "error" event
 */

function onError(error) {
    if(error.syscall !== 'listen'){
        throw error;
    }

    var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port' + port;


    //handle specific listen errors with friendly messages 

    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'require elevated privilages');
            process.exit(1);
            break;
        
        case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
    }


}







