var myCluster = require('cluster');

if(myCluster.isMaster) {
    console.log('master is running');
    myCluster.fork();
    myCluster.fork();
    myCluster.fork();
    myCluster.fork();
}

if (myCluster.isWorker){
    console.log('working working')
}


