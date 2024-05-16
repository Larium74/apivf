import {Router} from "express"
import { getClientes, postCliente, mainGet } from "../controllers/clientes.controllers.js"


let routerClientes = Router ()



routerClientes.get ("/clientes", getClientes)
routerClientes.post ("/clientes", postCliente)
routerClientes.get ("/", mainGet)


export default routerClientes