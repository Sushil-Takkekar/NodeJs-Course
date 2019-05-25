const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const db_url = 'mongodb://127.0.0.1:27017';
const db_name = 'task-manager-db';

mongoClient.connect(db_url, { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Error: Unable to Database !');
    }
    const db = client.db(db_name);

    /** Use insertOne */
    // db.collection('users').insertOne({
    //     name: 'John',
    //     age: 23
    // });

    const collection_name = 'tasks';
    const users_data = [
        {
            name: 'Mac',
            age: 28
        },
        {
            name: 'Andy',
            age: 22,
            location: 'Mumbai'
        }
    ];
    const tasks_data = [
        {
            description: 'Install products',
            completed: false
        },
        {
            description: 'Update timesheet',
            completed: true
        }
    ];

    /** Use insertMany */
    // db.collection(collection_name).insertMany(tasks_data, (err, result) => {
    //     if(err) {
    //         return console.log('Error: Unable to insert docs !');
    //     }
    //     console.log(result.insertedCount+' docs inserted successfully into collection '+collection_name);
    //     // for(let i=0;i<result.ops.length;i++) {
    //     //     console.log('ID : '+result.ops[i]._id);
    //     // }
    // })

    /** Use findOne */
    // db.collection(collection_name).findOne({ _id: new ObjectID("5cac72bdfc85794bf45bcf8d") }, (err, task) => {
    //     if(err) {
    //         return console.log('Error: Unable to fetch data !');
    //     } else if(!task) {
    //         console.log('No such document exists !');
    //     }else {
    //         console.log(task);
    //     }
    // })
    /** Use find */
    // db.collection(collection_name).find({ completed: false }).toArray((err, tasks) => {
    //     if(err) {
    //         return console.log('Error: Unable to fetch data !');
    //     }
    //     console.log(tasks);
    // });
    // db.collection(collection_name).find({ completed: false }).count((err, count) => {
    //     if(err) {
    //         return console.log('Error: Unable to fetch data !');
    //     }
    //     console.log('Total docs: '+count);
    // });

    /** Use updateMany */
    // db.collection(collection_name).updateMany({ completed:true },{
    //     $set : {
    //         completed: false
    //     }
    // }).then((data) => {
    //     console.log(data.modifiedCount);
    // }).catch((err) => {
    //     console.log(err);
    // })

    /** Use deleteOne */
    db.collection(collection_name).deleteOne({ completed:false }).then((data) => {
        console.log(data.deletedCount);
    }).catch((err) => {
        console.log(err);
    })
});