const { connection } = require("./dbConnection");

function seedSheltersTable() {
  const QUERY = `
    INSERT INTO shelters 
        (name, address_1, address_2, description, url) 
    VALUES
        ('wiener tierschutzverein', 'Triester Straße 8', '2331 Vösendorf', 'Die Stimme der Tiere. Das Original seit 1846.', 'https://www.wiener-tierschutzverein.org/'),
        ('TierQuarTier Wien', 'Süßenbrunner Straße 1018', '1220 Wien', 'Herzlich willkommen im TierQuarTier Wien!
        Im Tierschutz-Kompetenzzentrum der Stadt Wien finden bis zu 150 in der Stadt Wien entlaufene, herrenlose, beschlagnahmte und abgenommene Hunde, 300 Katzen und hunderte Kleintiere ein vorübergehendes Zuhause. Die Tiere werden bestens betreut, bis sie auf ein schönes, neues Plätzchen vermittelt werden können.', 'https://www.tierquartier.at/');`;

  connection.query(QUERY, (err, results) => {
    if (err) {
      throw err;
    }

    console.log("INSERT_DOG successfuly executed.", results);
  });
}

function seedDogsTable() {
  const QUERY = `
    INSERT INTO dogs 
        (name, age, breed, description, shelter_id) 
    VALUES
        ('Frida', '5', 'German Sheppard', 'Super friendly and home lover. Beware: Frida can play fetch all day long!', '1'),
        ('Lola', '9', 'French Bulldog', 'Very active, loves treats and playing.', '2'),
        ('Sunny', '14', 'Tibetian Terrier', 'Old lady who would do anything for a treat.', '1');`;

  connection.query(QUERY, (err, results) => {
    if (err) {
      throw err;
    }

    console.log("INSERT_DOG successfuly executed.", results);
  });
}

seedSheltersTable();
seedDogsTable();
