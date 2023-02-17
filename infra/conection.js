import mysql from 'mysql';

const conection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '8832',
    database: 'cadastroclientesform'
});

export default conection;