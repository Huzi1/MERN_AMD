import express from 'express';
import bodyParser from 'body-parser';

const db = require('./db');
const userSchmea = require('./user');

const app = express();

db.connectDB().then(r =>
    console.log('connected'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/hello', (req, res) => res.send('hello!'));


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


//insert & update data
app.post('/update', function (req, res) {
    let obj = req.body
    let category = obj.category
    let insertObj = obj.data
    let flag = false;
    let index = 0;
    db.getUserDoc(req.body).then(function (data) {
        // console.log(data.doc)
        let keys = Object.keys(data.doc)
        console.log(`${category}`)
        if (keys.includes(`${category}`)) {
            let catObj = data.doc[`${category}`]
            let nestedKeys = Object.keys(catObj);
            let nestedVals = Object.values(catObj)
            for (let i = 0; i < catObj.length; i++) {
                if (catObj[i].month === insertObj.month && catObj[i].year === insertObj.year) {
                    console.log("not unique " + i)
                    flag = true;
                    index = i;
                    console.log(catObj.length);
                }
            }
            // console.log(insertObj.month + " "+ insertObj.year)
            console.log(catObj.length);
        }
        db.update(req.body, obj.data, obj.category, flag, index).then(function (data) {
            // res.setHeader('Content-Type', 'text/plain');
            // res.end(data)
            console.log(data);
            res.end(JSON.stringify(200));
        }).catch(function (e) {
            return res.status(500, {
                error: e
            })
        });

        // console.log(typeof data)
        // console.log(data);
        // res.end(JSON.stringify(data.doc));
    })


})


//delete data


//update data


app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));


//post log form

app.post('/formA', function (req, res) {

    console.log(req.body);
    res.end(JSON.stringify(req.body));


});


app.listen(8000, () => console.log('Listening on port 8000'));