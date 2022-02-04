const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'alwaysmusic',
    password: 'controlactivo',
    port: 5432,
    max: 20,
    min: 0,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000,
});

pool
    .connect()
    .then(() => console.log('db conectada'))
    .catch((e) => console.log('Error de conexión' + e));

/*
client.query("SELECT NOW()", (err, res) => {
        console.log(err, res);
        client.end();
    });
*/

module.exports = pool;