/**
 * This script demonstrates how to use the cluster module in Node.js to create a cluster of worker processes.
 * Each worker process runs an HTTP server that responds with the worker's ID.
 * The number of worker processes is determined by the number of CPUs available on the system.
 */

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

    // Fork workers.
    /**
     * Forks worker processes based on the number of CPUs available on the system.
     */
    for (var i = 0; i < numCPUs; i++) {
        console.log('Forking worker ' + i);
        cluster.fork();
    }

} 

if (cluster.isWorker) {
    /**
     * Creates an HTTP server for each worker process.
     * The server responds with the worker's ID.
     */
    http.createServer(function(req, res) {
        res.writeHead(200); // 200 OK
        res.end('process ' + cluster.worker.id + ' says hello!');
    }).listen(8000);
}