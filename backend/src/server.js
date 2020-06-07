// import express from 'express';
const express = require("express")
// import bodyParser from 'body-parser';

const bodyParser = require("body-parser")
var cors = require("cors");
const db = require('./db');


const app = express();

db.connectDB().then(r =>
    console.log('connected'));
// in order to avoid cors policy error while running react and node server
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))




//RegisterUser
app.post('/regis', function (req, res) {
    console.log(req.body)
    db.registerUser(req.body).then(function (response) {
        if (response.code === 200) {
            res.end(JSON.stringify({code:200, message: "New user registered!"}));
        }
        else{
            console.log("in server res", response)
            res.end(JSON.stringify({code:204, res: response}));
        }
    }).catch(function (e) {

        res.end(JSON.stringify({code:202, message: "Error! username already exist"}));

    })
});

//Get data
app.get('/getData', function (req, res) {
    // let response;
    const body = req.query;

    db.getUserDoc(body).then(function (response) {

        if (response.code === 200) {

            res.end(JSON.stringify({code: 200, doc: response.doc}));
        }

    })
});


//Login validation & getData
app.post('/check', async function (req, res) {

    let response;
    try {
        response = await db.validate(req.body);


        if (response === 202) {
            db.getUserDoc(req.body).then(function (data) {

                if (data.code === 200) {
                    res.end(JSON.stringify({code: 200, doc: data.doc}));
                }


            })

        } else {
            res.end(JSON.stringify(204));
        }
    } catch (err) {
        return res.status(500).send()
    }
});


/**insert & update data **/
app.post('/update', function (req, res) {
    let obj = req.body;

    let category = obj.category;
    let insertObj = obj.data;
    let flag = false;
    let index = 0;
    db.getUserDoc(req.body).then(function (data) {

        let billsArr = data.doc.data;


        for (let i = 0; i < billsArr.length; i++) {

            if (billsArr[i].id === req.body.data.id && billsArr[i].category === req.body.data.category) {
                flag = true;
                console.log("duplicate bill flagged", billsArr[i])
            }

        }
        if (flag) {
            console.log(req.body)
            db.pullObjArrItem(req.body).then(function (data) {
                // console.log(data)
                flag = false;
            });
        }

        db.update(req.body, obj.data).then(function (data) {

            res.end(JSON.stringify(data));
        }).catch(function (e) {
            return res.status(500, {
                error: e
            })
        });


    })


})


/**delete bill -----> below sample body format
 {
  "firstName":"Yamin",
  "lastName": "Huzaifa",
  "password": "admin1",
  "username": "huz1",
  "category": "internet",
  "data": {
  	"category":"internet",
  	"id": "dec2020",
  	"ammount": 67

}} **/
app.delete('/delBill', function (req, res) {
    let body = req.query
    // console.log("billBody",body);
    db.pullArrItem(body).then(function (data) {
            if (data.code == 200) {

                res.end(JSON.stringify({code: 200, doc: data.doc}));
            } else {
                res.end(JSON.stringify(404));
            }

        }
    ).catch(function (e) {

        res.status(500, {
            error: e
        })
    })


})
//Delete a Category
app.delete('/delCat', function (req, res) {
    let body = req.query

    db.pullCat(body).then(function (data) {
            if (data.code == 200) {

                res.end(JSON.stringify(data));
            } else {
                res.end(JSON.stringify(404));
            }

        }
    ).catch(function (e) {

        res.status(500, {
            error: e
        })
    })


})


/**
 * call data by category sample body
 {
  "username": "huz1",
  "category": "internet"} **/
app.get('/getDoc', function (req, res) {
    db.getUserDoc(req.body).then(function (data) {
        if (data.code === 200) {
            let billsArr = data.doc

            const catBill = {}
            for (let i = 0; i < billsArr.length; i++) {
                if (billsArr[i].category === req.body.category) {
                    catBill[`${billsArr[i].id}`] = billsArr[i].amount
                }
            }

            res.end(JSON.stringify({code: 200, respData: catBill}));

        } else {
            res.end(JSON.stringify({code: 404}));
        }
    }).catch(function (e) {
        res.status(500, {
            error: e
        })
    })
})


//post log form

app.post('/formA', function (req, res) {


    res.end(JSON.stringify(req.body));


});


app.listen(8000, () => console.log('Listening on port 8000'));