const mongoose = require('mongoose');
//ESTRUCTURA DE LOS DATOS QUE VA A CONTENER LOS MODELOS
//ESQUEMAS DE LOS LIBROS 
const LibrosSchema = new mongoose.Schema(
    {
        title:{
            Type:String
        },
        titulo:{
            type:String
        },
        categoria:{
            type:String
        },
        sucursal:{
            type:String
        },
        //Valor objectid autoincrementable
        author:{
            type:String
        }
    },
    {
        versionKey:false,
        timestamps:true
       
    }
)
//MODELOS
const Libros = new mongoose.model('libros', LibrosSchema)

module.exports = {Libros}