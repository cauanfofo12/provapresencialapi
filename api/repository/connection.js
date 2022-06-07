export { con } from '../index.js'
import mysql from 'mysql2/promise.js'

const con = await mysql.createconnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PDW,
    database:process.env.MYSQL_DB
})

console.log('BD conectado')