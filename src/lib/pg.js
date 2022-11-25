const pg = require('pg')

const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'test',
    port: 5432,
    database: 'faceid'
})

const uniqRow = async (query, ...arr) => {
    try {
        const client = await pool.connect()
        const query = await client.query(query, arr)
        client.release()
        return query
    } catch (error) {
        console.log(error.message, 'uniqRow');
    }
}

module.exports = {
    uniqRow
}