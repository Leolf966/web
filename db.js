const { Pool } = require('pg');

const pool = new Pool({
    user: "mannhi",
    password: 'kfeufinn',
    host: "localhost",
    port: 5432,
    database: "node_mannhi"
});

module.exports = pool;