const { connection } = require("./dbConnection");

function seedDogsTable() {
  const INSERT_DOG = `
    INSERT INTO dogs 
        (name, age, breed, description) 
    VALUES
        ('john', '2', 'Labrador', 'Very nice dog!'),
        ('john', '2', 'Labrador', 'Very nice dog!'),
        ('john', '2', 'Labrador', 'Very nice dog!'),
        ('john', '2', 'Labrador', 'Very nice dog!'),
        ('john', '2', 'Labrador', 'Very nice dog!'),
        ('john', '2', 'Labrador', 'Very nice dog!'),
        ('john', '2', 'Labrador', 'Very nice dog!'),
        ('john', '2', 'Labrador', 'Very nice dog!'),
        ('john', '2', 'Labrador', 'Very nice dog!'),
        ('john', '2', 'Labrador', 'Very nice dog!'),
        ('john', '2', 'Labrador', 'Very nice dog!');`;

  connection.query(INSERT_DOG, (err, results) => {
    if (err) {
      throw err;
    }

    console.log("INSERT_DOG successfuly executed.", results);
  });
}

function seedSheltersTable() {
  const INSERT_DOG = `
    INSERT INTO shelters 
        (name, address_1, address_2, description, url) 
    VALUES
        ('wiener tierschutzverein', 'Triester Straße 8', '2331 Vösendorf', 'Die Stimme der Tiere. Das Original seit 1846.', 'https://www.wiener-tierschutzverein.org/');`;

  connection.query(INSERT_DOG, (err, results) => {
    if (err) {
      throw err;
    }

    console.log("INSERT_DOG successfuly executed.", results);
  });
}

seedDogsTable();
seedSheltersTable();
