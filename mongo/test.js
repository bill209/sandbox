var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://e8a3ad38-965b-48c8-8a2a-47277d6118e9:e5a41bea-45f8-43ae-9f9c-5fc702491c0b@swtg-qa-mongo-2a:27017/dev2';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    // insertDocuments(db, function() {
        findDocuments(db, function() {
            console.log('closing');
            db.close();
        });
    // });
});


var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('users');
    // Find some documents
    var promise = collection.find({ userId : {$eq : 'aaboss'} });

    promise.then(function(res){
        console.log('res: ', res);
    })
}
