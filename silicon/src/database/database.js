const mysql = require('mysql');

const mysqlconeccion= mysql.createconncttion({
    host: 'localhost'
    usuario: '',
    password:'',
    database: 'proyecto_silicon',
    })
mysqlconeccion.connect(function (err) {
    if(err){
        console.log('mi error', err);
        return;
    }else{
        console.log('mi coneccion se realizo correctamente')
    }
})

module.exports = mysqlconeccion;