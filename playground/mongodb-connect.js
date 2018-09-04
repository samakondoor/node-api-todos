const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err){
        return console.log('unable');

    }console.log('connected to mongoDB server');
     /* const db= client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: "something that i have to do",
        completed: false
    },(err, result) => {
        if (err){
            return console.log('unable to insert to tode',err);
        }
        console.log(JSON.stringify(result.ops, undefined,2));
    
    });
    db.collection('users').insertOne({
        _id:5,
        name:"tom hanks",
        age:60,
        location:'philadelphia'
    },(err,result) => {
        if(err){
            return console.log('unable to insert user', err);

        }
        console.log(JSON.stringify(result.ops,undefined,2));

    });
    
       

    client.close();*/
});
