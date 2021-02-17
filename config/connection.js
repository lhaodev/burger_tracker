// Set up MySQL connection.
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: 'd6rii63wp64rsfb5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'i0v4nu4y9m605voo',
        // NOTE: Be sure to add your MySQL password here!
        password: 'o8tbfa8n2763g5km',
        database: 'goeljptkbxslo5zw',
    });
};

// Make connection.
connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
