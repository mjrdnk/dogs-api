require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connection } = require("./dbConnection");
const app = express();

const SELECT_ALL_DOGS = "SELECT * FROM dogs;";

connection.connect((err, res) => {
  if (err) {
    throw err;
  }
});

app.use(cors());
app.use(bodyParser.json({ type: "application/*+json" }));

const PORT = process.env.PORT || 4000;
const jsonParser = bodyParser.json();

app.get("/", (req, res) => {
  res.send("Welcome to dogs api. Go to /dogs to get all the dogs.");
});

app.get("/dogs", (req, res) => {
  connection.query(SELECT_ALL_DOGS, (err, results) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      data: results
    });
  });
});

app.post("/dogs", jsonParser, (req, res) => {
  const { name, age, breed, description } = req.body;
  const INSERT_DOG = `INSERT INTO dogs (name, age, breed, description) VALUES('${name}', '${age}', '${breed}', '${description}')`;

  connection.query(INSERT_DOG, (err, results) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      data: results
    });
  });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
