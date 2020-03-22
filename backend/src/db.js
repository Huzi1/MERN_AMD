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
    let count = await User.exists({username: obj.username});
    console.log(count);

    if (count) {
        return 202
    } else {
        return 204
    }
}

function update(obj, newBill, category, flag, index) {
    return new Promise(function (resolve, reject) {

        let qry;
        if (!flag) {


            switch (category) {
                case 'internet':
                    qry = User.findOneAndUpdate({username: obj.username}, {$push: {"data.internet": newBill}});
                    break;
                case 'electricity':
                    qry = User.findOneAndUpdate({username: obj.username,}, {$push: {"data.electricity": newBill}});
                    break;
                case 'water':
                    qry = User.findOneAndUpdate({username: obj.username}, {$push: {"data.water": newBill}});
                    break;
                case 'gas':
                    qry = User.findOneAndUpdate({username: obj.username}, {$push: {"data.gas": newBill}});
                    break;
                default:

                    break;
            }
        }else{
            console.log("duplicate qry")
            switch (category) {
                case 'internet':
                    qry = User.findOneAndUpdate({username: obj.username}, {$push: {"data.internet": newBill,$position: index}});
                    break;
                case 'electricity':
                    qry = User.updateOne({username: obj.username}, {$set: {"data.electricity": newBill}});
                    console.log("Inside db case "+index)
                    break;
                case 'water':
                    qry = User.findOneAndUpdate({username: obj.username}, {$push: {"data.water": newBill,$position: index}});
                    break;
                case 'gas':
                    qry = User.findOneAndUpdate({username: obj.username}, {$push: {"data.gas": newBill,$position: index}});
                    break;
                default:

                    break;
            }
        }
        // let qry = User.findOneAndUpdate({username: obj.username}, {$push:{`data.${category}`:newBill}});

        qry.exec(function (err, user) {

            if (err) {
                console.log(err)
                return reject({err: 404})
            } else {
                // console.log(user)
                return resolve({id: user.data})
            }
        })

    });
}
function updateNested(){

}
function getUserDoc(obj){
    return new Promise(function (resolve, reject) {

            let qry = User.find({username: obj.username})

            qry.exec(function (err,user) {
                if(err){
                    console.log(err)
                    return reject({err: 404})
                }else{
                    // console.log(user)
                    return resolve({code: 202, doc: user[0].data});
                }

            })

    });
}


module.exports = {
    registerUser,
    validate,
    update,
    connectDB,
    getUserDoc

}


