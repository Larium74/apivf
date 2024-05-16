import connectiondb from "../database/connection.js"

export let getClientes = (req, res)=> {
    console.log ("Accediendo a la ruta /clientes")
    connectiondb.query ("SELECT Nombre_completo_Cliente, Telefono_Cliente, Email_Cliente FROM clientes")
    .then ((data)=> {
        console.log ("Han sido obtenidos los clientes: "+data[0])
        res.send ("Aquí tienes a los Clientes: "+data[0])
    })
    .catch ((error)=> {
        console.log ("Se ha producido un error al obtener a los Clientes "+error)
    })
}



export let postCliente = (req, res) => {
    console.log ("Accediendo a la ruta de agregar cliente")
    let {nombreCli, telefonoCli, emailCli} = req.body
    connectiondb.query ("INSERT INTO clientes (Nombre_completo_Cliente, Telefono_Cliente, Email_Cliente) VALUES (?, ?, ?)", [nombreCli, telefonoCli, emailCli])
    .then ((result)=> {
        console.log ("El cliente ha sido agregado")
        res.status (200)
    })
    .catch ((error)=> {
        console.log ("Hubo un error al agregar al cliente "+error)
        res.status (400)
    })

}



export let putClientes = (req, res) => {
    console.log ("Accediendo a /putClientes")
    connectiondb.query ("")

}

export let deleteClientes = (reeq, res) => {
    console.log ("Accediendo a /deleteClientes")

    
    const {idCli} = req.body.params
    connectiondb.query ("DELETE FROM clientes WHERE ID_Cliente = ?", [idCli])
        .then ((result)=> {
            console.log ("El cliente ha sido eliminado exitosamente")
            res.status (200).json ({
                message: "El cliente ha sido eliminado exitosamente",
                status: "correct"
            })
            .catch ((error)=> {
                console.log ("Hubo un error al eliminar el cliente "+error)
                res.status (400).json ({
                    message: "error",
                    error: error
                })
            })
        })
}



export let mainGet = (req, res) => {
    console.log ("Ingresnado a la ruta principal")
    res.send ("Bienvenidos a la ruta principal")
}