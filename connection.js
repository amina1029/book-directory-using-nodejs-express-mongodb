const MongoClient = require('mongodb').MongoClient;



 async function connectiontoDB(){
    const uri = "mongodb://0.0.0.0:27017/book";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    return client.db();



}

module.exports = {connectiontoDB}
    

