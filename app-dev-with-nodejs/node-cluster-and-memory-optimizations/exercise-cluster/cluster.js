var myCluster = require('cluster');

if (myCluster.isMaster) {
    console.log('Master working......');
    // create more workers to distribute the load
    myCluster.fork();
    myCluster.fork();
    myCluster.fork();
    myCluster.fork();
}

if (myCluster.isWorker) {
    console.log('Worker working......');

}

