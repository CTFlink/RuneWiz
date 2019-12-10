const data = require('./data.js');

var mysql = require('mysql');

//Connect to database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "runewords"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("CREATE DATABASE IF NOT EXISTS runewords", function (err, result) {
  if (err) throw err;
  console.log("Database created");
});

var sql = "CREATE TABLE IF NOT EXISTS runes (name VARCHAR(255), lvlreq INT, wpneffect VARCHAR(255), armeffect VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  //Inserting rune values into database
  var insertRunes = "INSERT INTO runes (name, lvlreq, wpneffect, armeffect) VALUES ?";

  con.query(insertRunes, [data.runeValues], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

  function visHej(){
    alertNumber("hej")
  };

//console.log(data.exporttest);