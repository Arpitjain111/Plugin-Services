const express = require('express');
const { getDataByQueryPostgres, getDataByQueryMySql } = require('./src/controllers/run_query')


const app = express();
const PORT = 7071;

app.use(express.json());

app.post('/postgresql/query', getDataByQueryPostgres)
app.post('/mysql/query', getDataByQueryMySql)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

//   {
//     "dbCredentials": {
//         "user": "postgres",
//         "host": "34.93.1.8",
//         "database": "test2",
//         "password": "walkover@123",
//         "port": "5432"
//     },
//     "query": "select * from users"
// }



// {
//   "dbCredentials": {
//       "user": "root",
//       "host": "localhost",
//       "database": "hello",
//       "password": "Walkover123@",
//       "port": 3306
//   },
//   "query": "select * from users"
// }
