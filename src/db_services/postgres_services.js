const {Client} = require('pg')

async function handlePostgresQuery(dbCredentials, query) {
  const client = new Client(dbCredentials);
console.log("aaya")
  try {
      await client.connect();
      console.log("connected")
      const result = await client.query(query);
      await client.end();

    return result.rows;

  } catch (error) {
    console.log('Error fetching users:', error);
    return error

  } finally {
    await client.end();
  }
}
module.exports={
handlePostgresQuery
}
