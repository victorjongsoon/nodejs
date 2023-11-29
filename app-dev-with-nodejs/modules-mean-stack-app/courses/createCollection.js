var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

var client = new mongoClient(url);

async function createCollection() {
    try {
        // connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB!');
    
        // create a new database
        const db = client.db('mydb');
    
        // create a new collection
        const collection = await db.createCollection('customers');
        console.log('Collection created!');
    
    } catch (err) {
        console.error('Error connecting to MongoDB!', err);
    } finally {
        // close the database connection
        client.close();
        console.log('Database connection closed!');
    }
}

createCollection();
