const { createConnection} = require('mysql2');

const executeQueryMySql = (dbCredentials, query) => {
  return new Promise((resolve, reject) => {
      const client = createConnection(dbCredentials);

      client.connect((err) => {
          if (err) {
              console.log("Connection not Created::", err);
              reject(err);
          } else {
              console.log("Connected");
              client.query(query, (err, result) => {
                  if (err) {
                      console.log(89, err);
                      reject(err);
                  } else {
                      resolve(result);
                  }
              });

              client.end((err) => {
                  if (err) {
                      console.log("Connection not closed yet", err);
                      reject(err);
                  } else {
                      console.log('Connection closed');
                  }
              });
          }
      });
  });
};

module.exports={
    executeQueryMySql
}
