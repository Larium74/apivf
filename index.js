import express, { urlencoded } from "express"
import connectiondb from "./database/connection.js"
let app = express ()
import routerClientes from "./routes/clientes.routes.js"
import cors from "cors"

app.use (cors ())
app.use (express.json ())
app.use(express.urlencoded({ extended: false }));

app.use (routerClientes)

app.listen (4000, ()=> console.log("Servidor inicializado en el puerto "+4000))