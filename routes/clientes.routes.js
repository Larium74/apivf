import {Router} from "express"
import { getClientes } from "../controllers/clientes.controllers.js"


let routerClientes = Router ()

routerClientes.get ("/clientes", getClientes)

export default routerClientes