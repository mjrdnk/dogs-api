const { connection } = require("./dbConnection");

function createTables() {
  const CREATE_TABLE_DOGS = `
      CREATE TABLE dogs (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        age VARCHAR(10) NOT NULL,
        description VARCHAR(600) NOT NULL,
        breed VARCHAR(255) NOT NULL,
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

createTables();
