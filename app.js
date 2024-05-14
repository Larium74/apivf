import express, { urlencoded } from "express"
import connectiondb from "./database/connection.js"
let app = express ()
import { PORT } from "./config.js"
import routerClientes from "./routes/clientes.routes.js"

app.use (express.json ())
app.use(express.urlencoded({ extended: false }));

app.use (routerClientes)

app.listen (PORT, ()=> console.log("Servidor inicializado en el puerto "+PORT))