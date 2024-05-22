import {Router} from "express"
import { getClientes, mainRuta, postCliente } from "../controllers/clientes.controllers.js"


let routerClientes = Router ()


routerClientes.get ("/", mainRuta)
routerClientes.get ("/clientes", getClientes)
routerClientes.post ("/clientes", postCliente)

export default routerClientes