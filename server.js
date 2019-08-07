const mysql = require("mysql");
const express = require("express");
const app = express();
const morgan = require('morgan');
const path = require("path");


  const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'hackplate',
    multipleStatement: true

  });

  db.connect((err)=>{
    if(err){
      console.error("hi", err);
    } else {
      console.log("hackplate connected");
    }
  });

  //Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



  //creating db from route
  // app.get("/createdb/:id", (req,res) =>{
  //   let sql = "SELECT * FROM hi";
  //   db.query(sql,(err, result) =>{
  //     if(err){
  //       console.error(err);
  //     }
  //     console.log(result);
  //       res.send(result[id]);
  //   });
  // });



app.listen("5000", ()=> {
  console.log("Server running on port 5-stacks");
});
