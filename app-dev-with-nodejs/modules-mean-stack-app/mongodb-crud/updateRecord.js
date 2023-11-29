// update record in customer collection
var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

var client = new mongoClient(url);

async function updateRecord() {
  try {
    // connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB!');

    // update record in customer collection
    const db = client.db();
    const collection = db.collection('customers');
    const query = { name: 'John Doe' };
    const newValues = { $set: { name: 'John Doe', address: '123 Main St - updated' } };
    const result = await collection.updateOne(query, newValues);
    console.log('Number of documents updated: ' + result.modifiedCount);

  } catch (err) {
    console.error('Error connecting to MongoDB!', err);
  } finally {
    // close the database connection
    client.close();
    console.log('Database connection closed!');
  }
}

updateRecord();
