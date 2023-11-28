var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

var client = new mongoClient(url);

async function connectToMongoDB() {
  try {
    // connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB!');

    // list all databases
    const dbList = await client.db().admin().listDatabases();
    console.log('Databases: ', dbList);

  } catch (err) {
    console.error('Error connecting to MongoDB!', err);
  }
}

connectToMongoDB();
