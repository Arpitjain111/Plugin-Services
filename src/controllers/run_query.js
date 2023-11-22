const { handlePostgresQuery } = require("../db_services/postgres_services")

const getDataByQueryPostgres = async (req, res) => {
  const { dbCredentials, query } = req.body;
  console.log("Hello!!!!!!!!!!")

  try {
    console.log(89, req.body)
    const data = await handlePostgresQuery(dbCredentials, query);

    console.log(data, 9999)

    return res.status(200).json({success : true,  data, message: 'Success' });
  } catch (error) {
    console.log('Error :: ', error);
    return res.status(400).json({ success : false, message: 'Some Error on Server', data: { error } });
  }
};

module.exports = {
  getDataByQueryPostgres
  };
  