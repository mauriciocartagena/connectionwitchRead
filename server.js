const express = require('express');
const mysql = require('mysql');
const PORT =process.env.PORT||3007;

const app=express();


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'oracle'
});

connection.connect(function(err){
    (err)?console.log(err):console.log(connection);
});

require('./routes/html-routes')(app,connection);

app.listen(PORT,()=>{
    console.log(`App runing on port ${PORT}`);
});