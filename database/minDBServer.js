const data = require('./data.js');
var mysql = require('mysql');
var createDB = "CREATE DATABASE IF NOT EXISTS runewords"
var createTable = "CREATE TABLE IF NOT EXISTS runes (name VARCHAR(255), lvlreq INT, wpneffect VARCHAR(255), armeffect VARCHAR(255), selected INT)";
var insertRunes = "INSERT INTO runes (name, lvlreq, wpneffect, armeffect, selected) VALUES ?";
var selectRunes = "SELECT * from runes";


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

con.query(createDB, function (err, result) {
  if (err) throw err;
  console.log("Database created");
});

con.query(createTable, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});

con.query(insertRunes, [data.runeValues], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});

con.query(selectRunes, function (err, result) {
  if (err) throw err;

  // Loop on each row
  var lng = result.length;
  var rc = result;
  for (var i = 0; i < lng; i++) {

    //Create an object to save current row's data
    var runeobj = {
      'name':rc[i].name,
      'lvlReq':rc[i].lvlreq,
      'wpnEffect':rc[i].wpneffect,
      'armEffect':rc[i].armeffect,
      'selected':rc[i].selected,
    }
    console.log(runeobj);
  }
});

//Drop db
function dropDB(){ 
  con.query('DROP DATABASE [IF EXISTS] runes', function (err, result) {
    if (err) throw err;
    });
    console.log("Databasen er slettet!")
}

//Create an object to save current row's data

            // 'name':[i].
            // 'lvlReq =
            // 'wpnEffect =
            // 'armEffect =
            // 'chosen =

  function visHej(){
    alertNumber("hej")
  };

//console.log(data.exporttest);