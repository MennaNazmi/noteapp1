//server setup
//step 1
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var noteRoute = require('./route/noteRoute')

var app = express();


app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", function (req, res) {
    res.send("server started ....")
});

app.use("/api/v1", noteRoute) //main route

app.listen(3000, () => {
    console.log('servrer  start...')
});