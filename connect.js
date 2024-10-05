import mysql from "mysql"

export const db = mysql.createConnection({
    host: "3306",
    user: "root",
    password: "Vikas@123",
    database: "social"
})