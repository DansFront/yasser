const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
});

exports.connect = async(query) => {
    const connect = await pool.connect();
    connect.query(query, (err, result) => {
        if(err)
            return err;
        if(result[0].lenght > 0)
            return result;
    });
}