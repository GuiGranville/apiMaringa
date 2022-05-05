import 'dotenv/config'
import knex from 'knex'
import Oracle from 'oracledb'

Oracle.initOracleClient({libDir: process.env.Oracle_DIR});

const db = knex({
    connection: {
        host: "10.16.70.3",
        user: "dbamv",
        password:"inovar2013",
        database: "MVTESTE2"
    },
    pool:{
        min: 1,
        max: 5,
    },
});

export default db;