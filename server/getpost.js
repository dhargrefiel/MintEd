const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createPool(
    {
        user: "root",
        host: "localhost",
        password: "Jannus123",
        database: "webtest",
    }
);

app.use(bodyParser.urlencoded({extended:true}))

//ALL POSTS
app.get("/get", (req, res)=>{
    const sqlSelect = "SELECT * FROM post;"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post("/insert", (req, res) => {
    const content = req.body.content;

    const sqlInsert = "INSERT INTO post (content, user_id, timestamp) VALUES(?, 1, now());"
    db.query(sqlInsert, [content], (err, result) => {
        res.send("success");
    })
})

app.post("/like", (req, res) => {
    const userLiking = req.body.userLiking;
    const post_id = req.body.post_id;
  
    db.query(
      "INSERT INTO likes (userLiking, post_id) VALUES (?,?)",
      [userLiking, post_id],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        db.query(
          "UPDATE post SET likes = likes + 1 WHERE post_id = ?",
          [post_id],
          (err2, results2) => {
            res.send(results);
          }
        );
      }
    );
  });
  app.post("/unlike", (req, res) => {
    const post_id = req.body.post_id;
  
        db.query(
          "UPDATE post SET likes = likes - 1 WHERE post_id = ?",
          [post_id],
          (err2, results2) => {
            res.send(results2);
          }
        );
      }
    );

//ALL COMMENTS

app.get("/insertcomment", (req, res) => {
    const post_id = req.query.post_id;
    const content = req.body.content;

    const sqlInsert = "INSERT INTO post (post_id, content, user_id, timestamp) VALUES(?,?, 1, now());"
    db.query(sqlInsert, [post_id,content], (err, result) => {
        res.send("success");
    })
})

app.listen(3002, () => {
    console.log("running server");
})