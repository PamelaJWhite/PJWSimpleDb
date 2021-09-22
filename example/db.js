let mysql = require('mysql')

//give the information to allow it to access the db
let connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB
  })


//make that connection
  connection.connect();

  
//issue a query on that connection 
//and the callback is saying
//do this with errors
//or else (if the error is falsey)show me the sqlrows in the console
  connection.query("use " + process.env.MYSQL_DB, function(error, rows){
    if(error){
        console.log("DB query error", error)
    } else {
        console.log("Query results:", rows)
  }
})

module.exports = connection;
  