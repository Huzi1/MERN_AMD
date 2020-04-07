const userSchema = require('./user');

const mongoose = require('mongoose');
// mongoose.Promise = Promise

var express = require('express');
const User = require('./user')

// const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://admin:${encodeURIComponent('admin@1')}@billingdata-sydlo.mongodb.net/bill?retryWrites=true&w=majority`;
// var db = mongoose.connection;

const connectDB = async () => {
    await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    console.log('DB connected...!');
};
// db.on('error', console.error.bind(console, 'connection error'));
//
// db.once('open', function() {
//     console.log('DB connected...!');
// })

function registerUser(obj) {
    //Compile schema to a model

    const user1 = new userSchema({
        _id: new mongoose.Types.ObjectId(),
        firstName: obj.firstName,
        lastName: obj.lastName,
        password: obj.password,
        username: obj.username,
        data: obj.data


    });
    user1.save().then(result => {
        console.log(result + "Registered")

    }).catch(err => console.log(err))
// user1.save(function(err,user){
//     if (err) return console.error(err);
//     console.log(user.username + "registered")
// })

}

async function validate(obj) {
    let check = await User.exists({username: obj.username, password:obj.password});
    console.log(check);

    if (check) {
        return 202
    } else {
        return 204
    }
}

function update(obj, newBill) {
    return new Promise(function (resolve, reject) {

        let qry = User.findOneAndUpdate({username: obj.username}, {$push: {"data": newBill}});

            qry.exec(function (err, user) {

                if (err) {
                    console.log(err)
                    return reject({code: 404})
                } else {
                    // console.log(user)
                    return resolve({code:200,doc: user.data})
                }
            })


        }
    );
}
//delete array item in document
function pullArrItem(obj) {
    return new Promise (function (resolve, reject) {

        let qry = User.update({username:obj.username}, {$pull:{"data": {id:obj.data.id, category: obj.data.category}}});

        qry.exec(function (err, userDoc) {
            if(err){
                console.log(err)
                return reject({code:404})
            }else{
                console.log(userDoc + "pull successful")
                return resolve({code:200})
            }
        })
    });

}

function getUserDoc(obj) {
    return new Promise(function (resolve, reject) {

        let qry = User.find({username: obj.username});

        qry.exec(function (err, user) {
            if (err) {
                console.log(err)
                return reject({code: 404})
            } else {
                console.log(user)
                return resolve({code: 200, doc: user[0]});
            }

        })

    });
}


module.exports = {
    registerUser,
    validate,
    update,
    connectDB,
    getUserDoc,
    pullArrItem

}


