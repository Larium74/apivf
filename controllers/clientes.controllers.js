import connectiondb from "../database/connection.js";

export let getClientes = (req, res) => {
    console.log("Accediendo a la ruta get /clientes");
    connectiondb.query("SELECT ID_Cliente, Nombres_Cliente, Apellidos_Cliente, Fecha_nacimiento_Cliente, Email_Cliente, Telefono_Cliente, Sexo_Cliente FROM clientes")
    .then((data) => {
        console.log("Los clientes se obtuvieron exitosamente: ", data[0]);
        res.status(200).json({
            Mensaje: "Aquí se muestran los Clientes",
            Clientes: data[0]
        });
    })
    .catch((error) => {
        console.log("Se ha producido un error al obtener a los Clientes: " + error);
        res.status(400).json({
            Mensaje: "Ha ocurrido un error al obtener a los Clientes"
        });
    });
};



export let postCliente = (req, res) => {
    console.log("Accediendo a la ruta post /clientes");

    const { Nombres_Cliente, Apellidos_Cliente, Fecha_nacimiento_Cliente, Email_Cliente, Telefono_Cliente, Sexo_Cliente } = req.body;

    connectiondb.query("INSERT INTO `clientes` (`Nombres_Cliente`, `Apellidos_Cliente`, `Fecha_nacimiento_Cliente`, `Email_Cliente`, `Telefono_Cliente`, `Sexo_Cliente`) VALUES (?, ?, ?, ?, ?, ?)", [Nombres_Cliente, Apellidos_Cliente, Fecha_nacimiento_Cliente, Email_Cliente, Telefono_Cliente, Sexo_Cliente])
    .then((result) => {
        console.log("El Cliente se ha agregado exitosamente a la base de datos", result);
        res.status(201).json({
            Mensaje: "Cliente agregado exitosamente",
            Result: result
        });
    })
    .catch((error) => {
        console.log("No se pudo agregar el Cliente a la base de datos: " + error.message);
        console.log ("Este es el nombre "+Nombres_Cliente, " Esta es la fecha de nacimiento "+Fecha_nacimiento_Cliente+" y este el email "+Email_Cliente)
        res.status(400).json({
            Mensaje: "No se pudo agregar el Cliente a la base de datos",
            Error: error.message
        });
    });
};

export let mainRuta = (req, res) => {
    console.log ("Accediendo a la ruta principal /")
    res.status (200).json ({
        Mensaje: "Bienvenidos a la ruta principal",
        Estado: "successly"
    })
}