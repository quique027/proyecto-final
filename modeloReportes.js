const mongoose = require('mongoose');
//ESTRUCTURA DE LOS DATOS QUE VA A CONTENER LOS MODELOS
//ESQUEMAS DE LOS LIBROS 
const ReportesSchema = new mongoose.Schema(
    {
        ganancias:{
            type:String
        },
        cuantosseVendieron:{
            type:String
        },
        actualizacionStock:{
            type:String
        },
        sucursal:{
            type:String
        }
    },
    {
        versionKey:false,
        timestamps:true
       
    }
)
//MODELOS
const Reportes = new mongoose.model('reportes', ReportesSchema)

module.exports = {Reportes}