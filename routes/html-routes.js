const mysql=require('mysql');
 


module.exports = (app, connection) => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });
    app.get('/',function(req,res){
        connection.query('Select * from persona',function(err,data){
            (err)?res.send(err):res.json({persona: data});
        });
    });
};
