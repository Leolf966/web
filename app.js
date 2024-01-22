const express = require('express');
const PlateController = require('./controller/plate.controller');
const plateRouter = require("./routes/plate.routes");
const cors = require('cors');
const port = 5500;
const app = express();

PlateController.createTable();
app.use(cors());




app.use(express.static("public"));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: 'POST,PUT,GET,OPTIONS',  
    allowedHeaders: ['Content-Type']  
}));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use(express.json());
app.use("/api", plateRouter);
app.get("", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.listen(5500, () => {
    console.log("http://127.0.0.1:5500");
});