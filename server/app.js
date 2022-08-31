const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()
const { student, campuses } = require('./db');

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

//this is where some things should go

// app.get("/", (req, res) => {
//     const arr = students.list();
//     res.send()
// })

app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  });


module.exports = app;

