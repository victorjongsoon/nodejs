var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
var client = new mongoClient(url);

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

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
  } finally {
    // close the database connection
    client.close();
    console.log('Database connection closed!');
}
}

connectToMongoDB();


