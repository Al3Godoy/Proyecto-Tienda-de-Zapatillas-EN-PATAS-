const express = require('express')
const router = express();
const bcrypt = require('bcrypt')



// archivo de conexion
const mysqlconeccion = require ('../database/database');
const { JsonWebTokenError } = require('jsonwebtoken');


router.get('/', (request, res)=>{
    res.send('pagina de inicio');
});

// devuelve a todos los alumnos activos
router.get('/alumnos,', (request, res)=>{
    res.send('listado de alumnos');
    mysqlconeccion.query('select * from alumnos where id_alumno4',  (err,row)=>{
        if(!err){
            res.json(rows);
            {else{
                console.log(err)
            }}
        }
    })
});
// Devolver los datos de un alumno puntual que recibimos al id
router.get('/alumnos/:id_alumnos', (req, res)=>{
    const { id_alumno } = req.params;
    const consulta=`select * from alumnos where id_alumno=${id_alumno}`;
    mysqlconeccion.query('select * from alumnos where id_alumno4',  (err,row)=>{
        if(!err){
            res.json(rows);
            {else{
                console.log(err)
            }}
        }
});

// Devuelve solo los curso puntual
router.get('/cursos/:id_curso', (req, res)=>{
    const { id_curso } = req.params;
    const consulta=`select * from cursos where id_curso=${id_curso}`;
    mysqlconeccion.query('select * from cursos where id_curso2',  (err,row)=>{
        if(!err){
            res.json(rows);
            {else{
                console.log(err)
            }}
        }
});

//metodo para insertar cursos por el metodo POST
router.post('/cursos', (req, res)=>{
    // console.log(req.body)
    const { nombre } =req.body
    let query=`INSERT INTO curso (nombre) VALUES ( '${nombre}')`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('Se inserto correctamente nuestro dato: '+nombre);
        }else{
            console.log(err)
        }
    })
});

//app.post('/login', urlencodedParser, function (req, res)
  

//metodo para insertar alumnos a travez del metodos POST
router.post('/alumnos', (req, res)=>{
    console.log(req.body);
    const { apellido, nombre, dni, fecha_nacimiento,sexo } =req.body
    let query=`INSERT INTO alumnos (apellido, nombre, dni, sexo,fecha_nacimiento, estado, fecha_creacion) VALUES ('${apellido}','${nombre}','${dni}','${sexo}','${fecha_nacimiento}', 'A', NOW())`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('Se inserto correctamente nuestro alumno: '+apellido+' '+nombre);
        }else{
            console.log(err)
            res.send('El error es: '+err);
        }
    })
    //res.send('llega el mensaje');
});

//metodo para editar los datos de curso a travex de PUT
router.put('/cursos/:id_curso', (req, res)=>{
   //asigna a id_curso el valor que recibe por el parametro
    let id_curso = req.params.id_curso;
    //asigna a nombre_nuevo_curso el valor que recibe en body.nombre
    let nombre_nevo_curso=req.body.nombre
    let query= `UPDATE curso SET nombre='${nombre_nevo_curso} 'WHERE id=' ${id_curso}'`;
    mysqlConeccion.query(query, (err, registros)=>{
    if(!err){
    res.send('llega a nuestro servidor por metodo PUT'+id_curso)
    }else{
        console.log(err)
    }
  });
});

//metodo para editar los datos de un alumno en particular
router.put('/alumnos/:id', (req, res)=>{
    //asigna a id_curso el valor que recibe por el parametro
    let id_alumno  = req.params.id;
    //asigna el valor que recibe  en el Body
    const { apellido, nombre, dni , fecha_nacimiento, sexo, domicilio, estado_civil } =req.body
    let query=`UPDATE alumnos SET apellido='${apellido}', nombre='${nombre}', dni='${dni}', fecha_nacimiento='${fecha_nacimiento}', estado_civil='${estado_civil}', sexo='${sexo}', domicilio='${domicilio}', fecha_modificacion=NOW() WHERE id_alumno='${id_alumno}'`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id_alumno+' y cambiamos muchos campos!!');
        }else{
            console.log(err)
        }
    });
});

//metodo para eliminar los datos de un curso en particular
router.delete('/cursos/:id_curso', (req, res)=>{
//asigna a id_curso el valor que recibe por el parametro
let id_curso = req.params.id_curso;
let query= `DELETE curso SET nombre='${nombre_nevo_curso} 'WHERE id=' ${id_curso}'`;
    mysqlConeccion.query(query, (err, registros)=>{
    if(!err){
    res.send('eliminamos el curso por metodo DELETE'+id_curso)
    }else{
        console.log(err)
    }
  });
});


//metodo para eliminar un alumno en particular
router.delete('/alumnos/:id_alumno', (req, res)=>{
    //asigna a id_curso el valor que recibe por el parametro
    let id_alumno = req.params.id_alumno;
    let query= `DELETE curso SET nombre='${nombre_nevo_alumno} 'WHERE id=' ${id_curso}'`;
        mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
        res.send('eliminamos al alumno por metodo DELETE'+id_curso)
        }else{
            console.log(err)
        }
      });
    });
 ///////////////
 ///usuarios////
 ///////////////
router.get('/usuarios', (req, send)=>{
    mysqlconeccion.query('select * from usuarios', (err, registro)=>{
        if(!err){
            res.json(registro);
        }else{
            console.log(err)
        }
    })
});


//////login de usuarios/////
router.post('/login', (req, res)=>{
    const {username, password} =req.body
    mysqlconeccion.query('selct * from usuarios where username=? AND password=?'[username, password], (err, rows)=Z{
        if(!err){
            console.log(rows);
            res.json(rows);
        }else{
            res.send('error'+err);
        }
        }
    });

    router.post('/login', (req, res)=>{
        const {username, password, email, apellido_nombre} =req.body


/////////////////////////// nuestra rutade prueba de generacion//////////////
router.get('/token', (req, res)=>{
    const usuario={
        id:1
        nombre: "Jose"
        correo: "albertojoseponce@gmail.com"
    }
    JsonWebTokenError.toString({usuario}, 'siliconkey', (err, token)=>
    res.send('nuestro token es: ' +token)
    )
}



    module.exports = router;