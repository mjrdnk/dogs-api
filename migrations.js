const { connection } = require("./dbConnection");

function createDogsTable() {
  const CREATE_TABLE_DOGS = `
      CREATE TABLE dogs (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        age VARCHAR(10) NOT NULL,
        description VARCHAR(600) NOT NULL,
        breed VARCHAR(255) NOT NULL,
        shelter_id INT NOT NULL,
        PRIMARY KEY ( id )
      );
    `;

  connection.query(CREATE_TABLE_DOGS, (err, results) => {
    if (err) {
      throw err;
    }

    console.log("CREATE_TABLE_DOGS successfuly executed.", results);
  });
}

function createSheltersTable() {
  const CREATE_TABLE_SHELTERS = `
      CREATE TABLE shelters (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        address_1 VARCHAR(255) NOT NULL,
        address_2 VARCHAR(255) NOT NULL,
        description VARCHAR(600) NOT NULL,
        url VARCHAR(512) CHARACTER SET 'ascii' COLLATE 'ascii_general_ci' NOT NULL,
        PRIMARY KEY ( id )
      );
    `;

  connection.query(CREATE_TABLE_SHELTERS, (err, results) => {
    if (err) {
      throw err;
    }

    console.log("CREATE_TABLE_SHELTERS successfuly executed.", results);
  });
}

createDogsTable();
createSheltersTable();
