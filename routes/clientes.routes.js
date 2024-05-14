import {Router} from "express"
import { getClientes, postCliente } from "../controllers/clientes.controllers.js"


let routerClientes = Router ()



routerClientes.get ("/clientes", getClientes)
routerClientes.post ("/clientes", postCliente)


export default routerClientes