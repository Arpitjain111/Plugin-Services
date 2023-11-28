const {Client} = require('pg')

async function handlePostgresQuery(dbCredentials, query) {
  const client = new Client(dbCredentials);
  try {
      await client.connect();
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
