import {config} from "dotenv"
config ()

export const HOST = process.env.MYSQLHOST
export const DB = process.env.MYSQLDATABASE
export const USER = process.env.MYSQLUSER
export const PASSWORD = process.env.MYSQLPASSWORD
export const DB_PORT = process.env.MYSQLPORT


