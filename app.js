const mongoose = require('mongoose');
const {Usuarios} = require('./modeloUser')
const {Libros} = require('./modeloLibros')
const {Reportes} = require('./modeloReportes')

const DB_URI = 'mongodb://localhost:27017/test_'

//CONFIGURACION DE CONEXION
mongoose.connect(DB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if(err){
            console.log('***** ERROR EN LA CONEXION *****');
        }else{
            console.log('***** CONEXION CORRECTA *****');
        }
});

//Crear usuarios consultas
const crearUsuario = () =>{
    Usuarios.create(
        {
            name: 'Daniel',
            email: 'Daniel@gmail.com',
            permiso: 'Administrador',
            puesto: 'Gerente'
        }
    )
}

//Consulta crear crear nuevo
const createLibros = () => {
    const listInventario = [
        {
        title:'',
        titulo:'Principito',
        categoria: 'Infantil',
        author: 'Gerardo Diaz',
        sucursal: 'Plaza Monarca'
        },
        
    ]
    Libros.insertMany(listInventario)
}


//Busqueda de todo
const BuscarPorTituloTodo = async () => {
    const post = await Libros.find({
        titulo:{
            $eq:'Principito'
        }
    })
    console.log('**** RESULTADO ****', post);
}


//Busqueda especifica
const BuscarPorTituloUno = async () => {
    const post = await Libros.findOne({
        titulo:'Principito'
    })
    console.log('**** RESULTADO ****', post);
}

//Busqueda para saber si exite un libro si no lo creamos
const buscarOCrear = async () => {
    //Metodo
    const post = await Libros.findOneAndUpdate(
        {
            titulo:'Super Carros'
        },
        {
            categoria: 'Adultos',
            author: 'Ramces Luis',
            sucursal: 'Plaza Monarca'
        },
        {   
            //Retorna e Inserta el nuevo valor 
            new:true,
            upsert: true
        })
        console.log('***** BUSCAR O CREAR *****', post);

}

//Editar libro
const editarLibro = async () => {
    const resultado = await Libros.updateOne(
        {
            titulo:'Super Carros'
        },
        {
            titulo:'EDITADO (Carros)',
            sucursal:'EDITADO Macro Plaza'
        },
    )
    console.log('***** LIBRO EDITADO *****',resultado);
}

//Eliminar libro por id
const borrarLibro = async () => {
    const resultado = await Libros.deleteOne(
        {
            _id:mongoose.Types.ObjectId('62f0ba17d1d3b608d4ec5ac6')
        }
    )
    console.log('***** RESULTADO *****', resultado);
}

//Eliminar todos los libros con el mismo titulo
const borrarLibros = async () => {
    const resultado = await Libros.deleteMany(
        {
            titulo:'Principito'
        }
    )
    console.log('***** RESULTADO *****', resultado);
}



const crearReporte = () => {
    Reportes.create(
        {
        title:'',
        ganancias:'$4000 pesos',
        cuantosseVendieron: '25 Libros',
        actualizacionStock: '500 Libros en Stock',
        sucursal: 'Macro Plaza'
        },
    )
}        
  
crearReporte()

//borrarLibros()

//borrarLibro()

//editarLibro()

//buscarOCrear()

//BuscarPorTituloUno()

//BuscarPorTituloTodo()

//crearUsuario()

//createLibros()

