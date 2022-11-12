const express = require("express");
const mysql= require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "webtest",
    }
);
//REGISTER API
app.post('/register', (req, res) => {

    const email = req.body.email;//galing doon sa frontend
    const password = req.body.password;
    const displayedName = req.body.displayedName;

    db.query(
        "INSERT INTO user (email, displayed_name, password) VALUES(?,?,?)", 
        [email, password, displayedName], 
        (err, result) => {
            console.log(err);
        }
    );
})

//LOGIN API
// app.post('/login', (req, res) => {
//     db.query("SELECT * FROM user WHERE email = ");
// })

app.listen(3001, () => {
    console.log("running server");
})