const { executeQueryMySql } = require("../db_services/mysql_services");
const { handlePostgresQuery } = require("../db_services/postgres_services")

const getDataByQueryPostgres = async (req, res) => {
  const { dbCredentials, query } = req.body;

  try {
    const data = await handlePostgresQuery(dbCredentials, query);

    return res.status(200).json({success : true,  data, message: 'Success' });
  } catch (error) {
    console.log('Error :: ', error);
    return res.status(400).json({ success : false, message: 'Some Error on Server', data: { error } });
  }
};

const getDataByQueryMySql = async (req, res) => {
  const { dbCredentials, query } = req.body;

  try {
    const data = await executeQueryMySql(dbCredentials, query);

    return res.status(200).json({success : true,  data, message: 'Success' });
  } catch (error) {
    console.log('Error :: ', error);
    return res.status(400).json({ success : false, message: 'Some Error on Server', data: { error } });
  }
};

module.exports = {
  getDataByQueryPostgres,
  getDataByQueryMySql
  };
  