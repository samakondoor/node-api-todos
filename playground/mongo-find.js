const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err){
        return console.log('unable');

    }console.log('connected to mongoDB server');
    const db = client.db('TodoApp');
    db.collection('Todos').find().toArray().then((docs) =>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('unable to fetch',err)
    });


    
});
