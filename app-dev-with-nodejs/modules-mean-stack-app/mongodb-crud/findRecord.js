// find record in customers collection

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

var client = new mongoClient(url);

async function findRecord() {
    try {
        // connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB!');
    
        // get the database
        const db = client.db('mydb');
    
        // get the collection
        const collection = db.collection('customers');
        console.log('Collection retrieved!');

        // find the first document in the customers collection
        const document = await collection.findOne();
        console.log(document); // { _id: 1, name: 'John', address: 'Highway 71' }
        console.log("ID:", document._id); // 1
        console.log("Name: ", document.name); // John
        console.log("Address: ", document.address); // Highway 71
    
    } catch (err) {
        console.error('Error connecting to MongoDB!', err);
    } finally {
        // close the database connection
        client.close();
        console.log('Database connection closed!');
    }
}

findRecord();