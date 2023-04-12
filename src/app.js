const express = require('express');
var cors = require('cors');
var app = express()
const reconhecimentoFacialRouter = require('../src/routes/rec-facial.router');
const fileUpload = require("express-fileupload");

const options = {
    methods: "GET,OPTIONS,PUT,POST,DELETE",
    origin: "*",
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors(options));
app.use(fileUpload());

app.use("/api", reconhecimentoFacialRouter);
app.use((error, request, response, next) => {
    console.log("Rertorno ERRO ")
    if (error) {
      console.log(error)
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
});



module.exports = app;
