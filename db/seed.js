async function dropTables() {
    try {
      console.log('Dropping All Tables...');
      // drop all tables, in the correct order
      await client.query(`
      DROP TABLE IF EXISTS reviews;
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS users;
      `);
      console.log("Finished dropping tables!");
    } catch (error) {
      console.log(error)
      console.error("Error dropping tables!");
      throw error;
    }
  }