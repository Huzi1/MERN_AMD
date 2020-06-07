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


function registerUser(obj) {
    return new Promise(function (resolve, reject) {
        //Compile schema to a model
        const user1 = new userSchema({
            _id: new mongoose.Types.ObjectId(),
            firstName: obj.firstName,
            lastName: obj.lastName,
            password: obj.password,
            username: obj.username,
            data: obj.data
        });
        user1.save().then(function (product) {
            if(product){
                console.log('res resolve in db',product)
                return resolve({code:200, res:product})
            }
            // else
            //     console.log("res reject in db", product)
            //     return reject({code:202})
        }).catch(function (e) {
            console.log("err caught",e)
        return  reject()
    })
    })}

async function validate(obj) {
    let check = await User.exists({username: obj.username, password: obj.password});
    // console.log(check);

    if (check) {
        return 202
    } else {
        return 204
    }
}

function update(obj, newBill) {
    return new Promise(function (resolve, reject) {

            let qry = User.findOneAndUpdate({username: obj.username}, {$push: {"data": newBill}}, {new: true});

            qry.exec(function (err, user) {

                if (err) {
                    // console.log(err)
                    return reject({code: 404})
                } else {


                    return resolve({code: 200, doc: {data: user.data}})
                }
            })


        }
    );
}

//delete array item in document
function pullArrItem(obj) {
    return new Promise(function (resolve, reject) {
        const bodyData = JSON.parse(obj.data)

        let qry = User.findOneAndUpdate({username: obj.username}, {
            $pull: {
                "data": {
                    id: bodyData.id,
                    category: bodyData.category
                }
            }
        }, {new: true});

        qry.exec(function (err, userDoc) {
            if (err) {
                // console.log(err)
                return reject({code: 404})
            } else {


                return resolve({code: 200, doc: userDoc})

            }
        })
    });

}

// Pull arr item using object
function pullObjArrItem(obj) {
    return new Promise(function (resolve, reject) {
        const data = obj.data

        let qry = User.findOneAndUpdate({username: obj.username}, {
            $pull: {
                "data": {
                    id: data.id,
                    category: data.category
                }
            }
        }, {new: true});

        qry.exec(function (err, userDoc) {
            if (err) {
                // console.log(err)
                return reject({code: 404})
            } else {


                return resolve({code: 200, doc: userDoc})

            }
        })
    });

}

function pullCat(obj) {
    return new Promise(function (resolve, reject) {
        let cat = JSON.parse(obj.data)

        let qry = User.findOneAndUpdate({username: obj.username}, {$pull: {"data": {category: cat.category}}}, {new: true});

        qry.exec(function (err, userDoc) {
            if (err) {
                // console.log(err)
                return reject({code: 404})
            } else {

                return resolve({code: 200, doc: userDoc})
            }
        })
    });

}


function getUserDoc(obj) {
    return new Promise(function (resolve, reject) {

        let qry = User.find({username: obj.username});

        qry.exec(function (err, user) {
            if (err) {
                // console.log(err)
                return reject({code: 404})
            } else {

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
    pullArrItem,
    pullCat,
    pullObjArrItem

}


