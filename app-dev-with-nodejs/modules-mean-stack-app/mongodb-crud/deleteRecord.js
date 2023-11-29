// delete a record from customers collection based on name
var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

var client = new mongoClient(url);

async function deleteRecord() {
    try {
        // connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB!');
    
        // get the database
        const db = client.db('mydb');
    
        // get the collection
        const collection = db.collection('customers');
        console.log('Collection retrieved!');

        // delete a document from the customers collection
        const result = await collection.deleteOne({ name: 'Kovan' });
        console.log('Document deleted!');
    
    } catch (err) {
        console.error('Error connecting to MongoDB!', err);
    } finally {
        // close the database connection
        client.close();
        console.log('Database connection closed!');
    }
}

deleteRecord();