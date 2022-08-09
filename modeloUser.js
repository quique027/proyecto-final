const mongoose = require('mongoose');
//ESTRUCTURA DE LOS DATOS QUE VA A CONTENER LOS MODELOS
//ESQUEMAS DE LOS USUARIOS
const UsuariosSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
        },
        permiso:{
        type:String
    },
        puesto:{
        type:String
            
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)
//MODELOS
const Usuarios = new mongoose.model('usuarios', UsuariosSchema)

module.exports = {Usuarios}