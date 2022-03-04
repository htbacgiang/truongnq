
const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./config/viewEngine.js");
const initWebRoutes = require("./route/web.js");
const connectDB = require("./config/connectDB.js");

require('dotenv').config();

let app = express();

//config app
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8080;
//Port === undefined => port = 2701

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})
module.exports = {
    "apps": [{
        "name": "MyApp",
        "script": "./server.js"
    }]
}