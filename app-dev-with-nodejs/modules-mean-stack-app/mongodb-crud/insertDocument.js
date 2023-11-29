// insert a document into the customers collection
var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

var client = new mongoClient(url);

async function insertDocument() {
    try {
        // connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB!');
    
        // get the database
        const db = client.db('mydb');
    
        // get the collection
        const collection = db.collection('customers');
        console.log('Collection retrieved!');
    
        // insert a document into the customers collection
        const result = await collection.insertOne({ _id: 3, name: 'Kovan', address: 'Orchard 21' });
        console.log('Document inserted!');
    
    } catch (err) {
        console.error('Error connecting to MongoDB!', err);
    } finally {
        // close the database connection
        client.close();
        console.log('Database connection closed!');
    }
}

insertDocument();