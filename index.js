const express = require('express');
const { getDataByQueryPostgres } = require('./src/controllers/run_query')


const app = express();
const PORT = 7071;

app.use(express.json());

app.post('/postgresql/query', getDataByQueryPostgres)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });