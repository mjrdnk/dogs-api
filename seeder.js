const { connection } = require("./dbConnection");

function seedTables() {
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

seedTables();
