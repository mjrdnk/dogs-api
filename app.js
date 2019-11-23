require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connection } = require("./dbConnection");
const app = express();

const SELECT_ALL_DOGS = "SELECT * FROM dogs;";
const SELECT_ALL_SHELTERS = "SELECT * FROM shelters;";

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
  res.send("Welcome to dogs api. Go to /dog to get all the dogs.");
});

app.get("/dog", (req, res) => {
  connection.query(SELECT_ALL_DOGS, (err, results) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      data: results
    });
  });
});

app.get("/dog/:id", (req, res) => {
  const { id } = req.params;
  const SELECT_DOG_BY_ID = `SELECT * FROM dogs WHERE ID = ${id}`;
  connection.query(SELECT_DOG_BY_ID, (err, results) => {
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

app.get("/shelter", (req, res) => {
  connection.query(SELECT_ALL_SHELTERS, (err, results) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      data: results
    });
  });
});

app.get("/shelter/:id", (req, res) => {
  const { id } = req.params;
  const SELECT_SHELTER_BY_ID = `SELECT * FROM shelters WHERE ID = ${id}`;
  connection.query(SELECT_SHELTER_BY_ID, (err, results) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      data: results
    });
  });
});

app.post("/shelter", jsonParser, (req, res) => {
  const { name, address_1, address_2, description, url } = req.body;
  const INSERT_SHELTER = `INSERT INTO shelters (name, address_1, address_2, description, url) VALUES('${name}', '${address_1}', '${address_2}', '${description}', '${url}')`;

  connection.query(INSERT_SHELTER, (err, results) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      data: results
    });
  });
});

app.post("/shelter", jsonParser, (req, res) => {
  const { name, address_1, address_2, description, url } = req.body;
  const INSERT_SHELTER = `INSERT INTO shelters (name, address_1, address_2, description, url) VALUES('${name}', '${address_1}', '${address_2}', '${description}', '${url}')`;

  connection.query(INSERT_SHELTER, (err, results) => {
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
