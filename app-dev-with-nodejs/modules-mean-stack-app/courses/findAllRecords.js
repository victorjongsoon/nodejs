// find all records in csutomers collection
var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

var client = new mongoClient(url);

async function findAllRecords() {
    try {
        // connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB!');
    
        // get the database
        const db = client.db('mydb');
    
        // get the collection
        const collection = db.collection('customers');
        console.log('Collection retrieved!');

        // find all documents in the customers collection
        const documents = await collection.find().toArray();
        console.log(documents); 
    
    } catch (err) {
        console.error('Error connecting to MongoDB!', err);
    } finally {
        // close the database connection
        client.close();
        console.log('Database connection closed!');
    }
}

findAllRecords();