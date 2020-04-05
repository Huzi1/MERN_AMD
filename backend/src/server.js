import express from 'express';
import bodyParser from 'body-parser';

const db = require('./db');


const app = express();

db.connectDB().then(r =>
    console.log('connected'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



app.post('/formA', function (req, res) {

    console.log(req.body);
    res.end(JSON.stringify(req.body));


});

//RegisterUser
app.post('/regis', function (req, res) {
    db.registerUser(req.body)
    res.end(JSON.stringify(200));

});


//Login validation
app.get('/check', async function (req, res) {
    let response;
    try {
        response = await db.validate(req.body);


        console.log(response)
        if (response === 202) {

            res.end(JSON.stringify(200));
        } else {
            res.end(JSON.stringify(204));
        }
    } catch (err) {
        return res.status(500).send()
    }
});


/**insert & update data **/
app.post('/update', function (req, res) {
    let obj = req.body
    let category = obj.category
    let insertObj = obj.data
    let flag = false;
    let index = 0;
    db.getUserDoc(req.body).then(function (data) {

        let billsArr = data.doc
        for (let i = 0; i < billsArr.length; i++) {
            if (billsArr[i].id === req.body.data.id && billsArr[i].category === req.body.category) {
                flag = true;
            }

        }
        if (flag) {
            db.pullArrItem(req.body).then(function () {

                flag = false;
            });
        }

        // console.log(req.body)
        db.update(req.body, obj.data).then(function (data) {
            // res.setHeader('Content-Type', 'text/plain');
            // res.end(data)
            console.log(data);
            res.end(JSON.stringify(200));
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

    db.pullArrItem(req.body).then(function (data) {
            if (data.code == 200) {

                res.end(JSON.stringify(200));
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
            console.log(catBill);
            res.end(JSON.stringify({code:200, respData:catBill}));

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

    console.log(req.body);
    res.end(JSON.stringify(req.body));


});


app.listen(8000, () => console.log('Listening on port 8000'));