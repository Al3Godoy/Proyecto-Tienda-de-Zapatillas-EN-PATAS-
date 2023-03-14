const express= require('express');
const router = express();
// libreria que utilizaremos para la encriptacion de los password
const bcrypt= require('bcrypt');
// libreria que utilizaremos para la generacion de nuesrto token
const jwt= require('jsonwebtoken');
//////archivo de coneccion
const mysqlConeccion = require('../database/database');
//////fin archivo de coneccion

///////ruta raiz
router.get('./', (req, res)=>{
    res.send('');
});

//.Devuelve  todos los pedidos
router.get('./pedidos', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
        mysqlConeccion.query('select * from pedido order by estado, nombre_apellido', (err, registro)=>{
            if(!err){
                res.json(registro);
            }else{
                console.log(err)
            }
        })
        }
    })
});


router.put('./cambioestadocliente_mayorista/:id', (req, res)=>{
     let id  = req.params.id;
     let estado=req.body.estado  
     
     let query=`UPDATE cliente_mayorista SET estado='${estado}' WHERE id_cliente='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El estado del Cliente Mayorista se cambio correctamente"
            });
        }else{
            res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});

router.put('./altapedido/:id', (req, res)=>{
    let id  = req.params.id;
    let query=`UPDATE pedidos SET estado='A' WHERE id_pedidos='${id}'`;

     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"Se cargo correctamente su pedido"
            });
        }else{
           res.json({
                status: false,
                mensaje:"Hubo un error"
            });
        }
    })
    
});

router.get('./pedidos/:id_pedidos',(req, res)=>{

        const  { id_pedido } = req.params;
                mysqlConeccion.query('select * from pedidos where id_pedido=?',[id_pedido], (err, registros)=>{
                    if(!err){
                        res.json(registros);
                    }else{
                        console.log(err)
                    }
                })
       
    });

router.post('./pedidos', (req, res)=>{
    const { descripcion } =req.body
     console.log(req.body);
            let query=`INSERT INTO pedidos (descripcion, estado) VALUES ('${descripcion}', 'A')`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"El pedido se dio de Alta correctamente"
                    });
                      }else{
                    console.log(err)
                }
            })
      
    
});

//metodo para buscar un pedidos por su descripcion
router.get('./busqueda_pedidos', (req, res)=>{
    const descripcion =req.body.descripcion
    console.log(nombre)
    let query;
    if(nombre){
         console.log('hola ingresa a la primer  condicion')
        query=`SELECT concat_ws(' ', nombre_apellido) clientes, d.descripcion pedidos 
        FROM proyecto_final_an_godoyalmaraz.clientes c 
        inner join clientes_pedidos cp on cp.id_cliente=cm.id_cliente 
        inner join pedidos p on p.id_pedido=cp.id_pedido  where p.descripcion like '%${descripcion}%'`;
    }else{
        console.log('hola ingresa en la segunda condicion')
        query=`SELECT concat_ws(' ', nombre_apellido) clientes, d.descripcion pedidos 
        FROM proyecto_final_an_godoyalmaraz.clientes a 
        inner join cliente_pedido cp on cp.id_cliente=c.id_cliente 
        inner join pedidos p on p.id_pedido=cp.id_pedido `;
    }
   

    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json(
                {
                    status: true,
                    registros:registros
                });
           
        }else{
            // console.log(err)
            res.send('Hubo un error en el servidor');
        }
    })
        
    
});

router.put('./marcas_calzados/:id_marca_calzado', (req, res)=>{
    //asigna a id_marca_calzado el valor que recibe por el parametro 
    let id_marca_calzado  = req.params.id_marca_calzado;
    //asigna a descripcion_nuevo_id_marca_calzado el valor que recibe  en el Body.descripcion 
    let descripcion_nuevo_marcas_calzados=req.body.descripcion  
        
        let query=`UPDATE marcas_calzados SET descripcion='${descripcion_nuevo_id_marca_calzado}' WHERE id_marca_calzado='${id_marca_calzado}'`;
        mysqlConeccion.query(query, (err, registros)=>{
            if(!err){
                res.send('El Id que editamos es : '+id_marca_calzado+' y cambiamos el nombre a : '+descripcion_nuevo_marcas_calzados);
            }else{
                console.log(err)
            }
        });
        
});


router.put('./tipos_calzados/:id_tipo_calzado', (req, res)=>{
    //asigna a id_tipo_calzado el valor que recibe por el parametro 
    let id_tipo_calzado  = req.params.id_tipo_calzado;
    //asigna a descripcion_nuevo_id_marca_calzado el valor que recibe  en el Body.descripcion 
    let descripcion_nuevo_tipos_calzados=req.body.descripcion  
        
        let query=`UPDATE tipos_calzados SET descripcion='${descripcion_nuevo_id_tipo_calzado}' WHERE id_tipo_calzado='${id_tipo_calzado}'`;
        mysqlConeccion.query(query, (err, registros)=>{
            if(!err){
                res.send('El Id que editamos es : '+id_tipo_calzado+' y cambiamos el nombre a : '+descripcion_nuevo_tipos_calzados);
            }else{
                console.log(err)
            }
        });
        
});

//metodo para elimiinar los datos de un pedido en particular
router.delete('./pedidos/:id_pedido', (req, res)=>{
   //asigna a id_pedido el valor que recibe por el parametro 
   let id_pedido  = req.params.id_pedido; 
   jwt.verify(req.token, 'siliconKey', (error, valido)=>{
    if(error){
        res.sendStatus(403);
    }else{
        let query=`DELETE FROM pedidos WHERE id_pedido='${id_pedido}'`;
        mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El Id que ELIMINAMOS es : '+registros);
                }else{
                    res.send('El error  es : '+ err); 
                }
            })
        }
    })
});
////////////// /////////////////
//////////////clientes //////////
////////////// /////////////////
//Devuelve a todos los clientes activos de nuestra base de datos 
router.get('./clientes', verificarToken, (req, res)=>{
    jwt.verify(req.token, 'siliconKey', (error)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const query='select * from clientes';
            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            })
        }
    });    
});


router.post('./buscar_clientes', (req, res)=>{
    
    let {nombre_apellido, DNi, usuario, email}=req.body  

            var query='select * from clientes where 1 ';
            if(nombre_apellido){
                query=query +`AND nombre_apellido like '%${nombre_apellido}%'`;
            }
           
            if(DNi){
                query=query +`AND DNi like '%${DNi}%'`;
            }

            if(usuario){
                query=query +`AND usuario = '${usuario}'`;
            }
            if(email){
                query=query +`AND email = '${email}'`;
            }
            // console.log(query);

            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    // console.log(rows);
                    res.json(rows);
                }else{
                    console.log(err)
                }
            })
        
        
});

router.get('./Clientes_cantidad_Pedidos', verificarToken, (req, res)=>{
       jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            const query='SELECT T.id_cliente, T.nombre_apellido, T.DNi, T.usuario, T.email from (SELECT A.id_cliente, CONCAT_WS(" ", nombre_apellido ) cliente, COUNT(id_pedido) cantidad_Pedidos FROM clientes as C inner join Pedidos as PE ON PE.id_cliente=cm.id_cliente LEFT join pedido PE ON PE.id_pedido=PE.id_pedido where estado = "A" GROUP by id_cliente) AS T order by T.cantidad_Pedidos DESC';
            mysqlConeccion.query(query, (err, rows)=>{
                if(!err){
                    res.json(rows);
                }else{
                    console.log(err)
                }
            })
        }
    });    
});

//  // Devolver los datos de un cliente puntual que recibamos el ID

// router.get('/clientes/:id_cliente', (req, res)=>{
//     const  parametro  = req.params.id_cliente;
//     if(esNumero(parametro)){
//         res.json(
//             {
//                 status: false,
//                 mensaje:"El parametro que se espera tiene ser un numero entero"
//             });
//     }else{
//                 mysqlConeccion.query('select *, DATE_FORMAT(fecha_nacimiento, "%Y-%m-%d") as fecha_formateada from clientes where id_cliente=?',[parametro], (err, rows)=>{
//                     if(!err){
//                         if(rows.length!=0){
//                             res.json(rows);
//                         }else{
//                             res.json(
//                                 {
//                                     status: false,
//                                     mensaje:"El ID del cliente no existe en la base de datos."
//                                 });
//                         }    
//                     }else{
//                         res.json(
//                         {
//                             status: false,
//                             mensaje:"Error en el servidor."
//                         });
//                     }
//                 });
               
//             }
// })

//metodo para insertar clientes a travez del metodo POST
router.post('./clientes', (req, res)=>{
    const { nombre_apellido, DNi, usuario, email, ciudad, provincia, CP, domicilio } = req.body
    
            let query=`INSERT INTO clientes (nombre_apellido, DNi, usuario, email, ciudad, provincia, CP, domicilio) VALUES ('${nombre_apellido}','${DNi}','${usuario}','${email}','${ciudad}','${provincia}','${CP}' '${domicilio}','${estado_civil}','A', NOW(),)`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('Se inserto correctamente nuestro cliente: '+nombre_apellido);
                }else{
                    console.log(err)
                    res.send('El error es: '+err);
                }
            })
       
    
});



//metodo para insertar clientes relacionados a un pedido
router.post('./pedidos', (req, res)=>{
    console.log(req.body);
    const { id_cliente, id_pedido } = req.body
    mysqlConeccion.query('select * from pedidos where id_cliente=? AND id_pedido=?',[id_cliente, id_pedido], (err, rows)=>{
        if(!err){
            if(rows.length!=0){
                res.json(
                    {
                        status: false,
                        mensaje:"El cliente ya se encuentra en este pedido."
                    });
                
            }else{
                let query=`INSERT INTO pedidos (id_cliente, id_pedido) VALUES ('${id_cliente}','${id_pedido}')`;
                mysqlConeccion.query(query, (err, registros)=>{
                    if(!err){
                        res.send('Se inserto correctamente nuestro cliente: '+id_cliente+'en el pedido :'+id_pedido);
                    }else{
                        console.log(err)
                        res.send('El error es: '+err);
                    }
                })
            }
        }else{
            res.send('El error es: '+err);
        }
        });  
});
//metodo para elimiinar los datos de un cliente en particular
router.delete('./clientes/:id',verificarToken ,(req, res)=>{
    //asigna a id_cliente el valor que recibe por el parametro 
    let id_cliente  = req.params.id; 
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            let query=`DELETE FROM clientes WHERE id_cliente='${id_cliente}'`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.send('El cliente que ELIMINAMOS es ID : '+id_cliente);
                }else{
                    res.send('El error  es : '+ err); 
                }
            })
        }
    })
 });

//metodo para editar los datos de un cliente en particular
router.put('./clientes/:id' , (req, res)=>{
    //asigna a id_pedido el valor que recibe por el parametro 
    let id_cliente  = req.params.id;
    const {  nombre_apellido, DNi, usuario, email, ciudad, provincia, CP, domicilio } =req.body  
    console.log(req.body)
    let query=`UPDATE clientes SET nombre_apellido='${nombre_apellido}', DNi='${DNi}', usuario='${usuario}', email='${email}', ciudad='${ciudad}',provincia='${provincia}',CP='${CP}',domicilio='${domicilio}', fecha_modificacion=NOW() WHERE id_cliente='${id_cliente}'`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id_cliente+' y cambiamos muchos campos!!');
        }else{
            console.log(err)
        }
    })
       
});


////////////// /////////////////
//////////////usuarios_empresa /////////
////////////// /////////////////
router.get('./usuarios_empresa', verificarToken, (req, res)=>{

        jwt.verify(req.token, 'siliconKey', (error, valido)=>{
            if(error){
                res.sendStatus(403);
            }else{
                mysqlConeccion.query('select * from usuarios_empresa', (err, registro)=>{
                    if(!err){
                        res.json(registro);
                    }else{
                        console.log(err)
                    }
                })
            }
        })   
        
});


////////////login de usuarios //////////////
////////////////////////////////////////////


router.post('./login', (req, res)=>{
    const {usuario, password} =req.body
    if(usuario!=undefined && password!=undefined){
        mysqlConeccion.query('select u.id,u.apellido_nombre, u.usuario,  u.password,  u.email  from usuario_empresa u where u.estado="a" AND usuario=?',[usuario], (err, rows)=>{
            if(!err){
                if(rows.length!=0){
                    const bcryptPassword = bcrypt.compareSync(password, rows[0].password);
                    if(bcryptPassword){
                        jwt.sign({rows}, 'siliconKey' ,(err, token)=>{
                            res.json(
                                {
                                    status: true,
                                    datos: rows,
                                    token: token
                                });
                        }) 
                    }else{
                        res.json(
                            {
                                status: false,
                                mensaje:"La Contraseña es incorrecta"
                            });
                    }
                }else{
                    res.json(
                        {
                            status: false,
                            mensaje:"El usuario no existe "
                        });
                    
                }
            }else{
                res.json(
                    {
                        status: false,
                        mensaje:"Error en el servidor"
                    });
                
            }
        });
    }else{
        res.json({
            status: false,
            mensaje:"Faltan completar datos"
        });
    }
});

////////////registro de usuarios //////////////
router.post('./registro', async(req, res)=>{
    const { apellido_nombre, usuario, password, email} =req.body
    let hash = bcrypt.hashSync(password,10);
    
// aca  consulto si existe ya ese nombre en la bd
    let query=`INSERT INTO usuarios (apellido_nombre, usuario, password, email,  fecha_creacion) VALUES ('${apellido_nombre}''${usuario}','${hash}','${email}',,NOW())`;
    mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario se creo correctamente"
            });
        }else{
            res.json({
                status: false,
                mensaje:"Hubo un error en el servidor.La accion no se realizo"
            });
        }
    })
});

router.put('./resetpassword/:id', (req, res)=>{
    // asigna a id_usuario el valor que recibe por el parametro 
     let id  = req.params.id;
    // //asigna el valor que recibe  en el Body 
     const { password } =req.body 
     let hash = bcrypt.hashSync(password,10); 
    //  generamos la query de modificacion del password
     let query=`UPDATE usuarios_empresa SET password='${hash}' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+' y cambiamos el password! Muchas gracias!');
        }else{
            console.log(err)
        }
    })

    
});

router.put('./resetpassword/:id', (req, res)=>{
    // asigna a id_usuario el valor que recibe por el parametro 
     let id  = req.params.id;
    // //asigna el valor que recibe  en el Body 
     const { password } =req.body 
     let hash = bcrypt.hashSync(password,10); 
    //  generamos la query de modificacion del password
     let query=`UPDATE clientes SET password='${hash}' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+' y cambiamos el password! Muchas gracias!');
        }else{
            console.log(err)
        }
    })

    
});

router.put('./resetpassword/:id', (req, res)=>{
    // asigna a id_usuario el valor que recibe por el parametro 
     let id  = req.params.id;
    // //asigna el valor que recibe  en el Body 
     const { password } =req.body 
     let hash = bcrypt.hashSync(password,10); 
    //  generamos la query de modificacion del password
     let query=`UPDATE proveedores SET password='${hash}' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.send('El Id que editamos es : '+id+' y cambiamos el password! Muchas gracias!');
        }else{
            console.log(err)
        }
    })

    
});

router.put('./bajausuario/:id', (req, res)=>{
    // asigna a id_usuario el valor que recibe por el parametro 
     let id  = req.params.id;
     let query=`UPDATE usuarios_empresa SET estado='B' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario_empresa se dio de BAJA correctamente"
            });
        }else{
            console.log(err)
        }
    })
    
});

router.put('./altausuario/:id', (req, res)=>{
    // asigna a id_usuario el valor que recibe por el parametro 
     let id  = req.params.id;
     let query=`UPDATE usuarios_empresa SET estado='A' WHERE id='${id}'`;
     mysqlConeccion.query(query, (err, registros)=>{
        if(!err){
            res.json({
                status: true,
                mensaje:"El usuario_empresa se dio de Alta correctamente"
            });
        }else{
            console.log(err)
        }
    })
    
});


///////////////////////////////////////////
/////////////solicitud de pedido////////////////
///////////////////////////////////////////

router.post('./solicitud', (req, res) => {
  const { id_cliente, fecha_entrega, estado, cantidad, id_stock } = req.body;

  // Validación de los datos recibidos
  if (!id_cliente || !fecha_entrega || !estado || !cantidad || !id_stock) {
    res.status(400).json({
         status: false,
         mensaje: "Faltan datos obligatorios"
         });
    return;
  }

  // Validación de tipos de datos
  if (typeof id_cliente !== 'number' || typeof cantidad !== 'number' || typeof id_stock !== 'number') {
    res.status(400).json({ 
        status: false, 
        mensaje: "El ID del cliente, la cantidad y el ID del stock deben ser números" 
        });
    return;
  }

  // Validación del estado
  const estadosPosibles = ['a', 'b'];
  if (!estadosPosibles.includes(estado)) {
    res.status(400).json({
        status: false, 
        mensaje: "El estado del pedido no es válido"
     });
    return;
  }

  const fecha_creacion = new Date();

  mysqlConeccion.query('INSERT INTO pedidos (id_clientes, fecha_entrega, estado, cantidad, fecha_creacion, id_stock) VALUES (?, ?, ?, ?, ?, ?)', [id_cliente, fecha_entrega, estado, cantidad, fecha_creacion, id_stock], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ 
        status: false, mensaje: "Error en el servidor" 
        });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ 
        status: false, mensaje: "No se pudo crear el pedido" 
        });
      return;
    }

    const id_Pedido = result.insertId;

    res.status(201).json({ status: true, mensaje: "Pedido creado correctamente", id_Pedido });
  });
});



// router.get('/cursosSinAsignar/:id_cliente',(req, res)=>{

//     const  { id_cliente } = req.params;
//             mysqlConeccion.query('SELECT id_pedido, nombre FROM pedido WHERE id_pedido NOT IN (SELECT id_pedido FROM inscripciones WHERE id_cliente = ?)',[id_cliente], (err, registros)=>{
//                 if(!err){
//                     res.json(registros);
//                 }else{
//                     console.log(err)
//                 }
//             })
   
// });

router.post('./SolicitudPedido', (req, res)=>{
    const { id_cliente, id_pedido, descripcion } =req.body
    console.log(req.body)
            let query=`INSERT INTO pedidos (id_cliente, id_pedido, estado, descripcion, fecha_creacion ) VALUES ('${id_cliente}','${id_pedido}', 'a','${descripcion}', NOW())`;
            mysqlConeccion.query(query, (err, registros)=>{
                if(!err){
                    res.json({
                        status: true,
                        mensaje:"Su pedido se cargo correctamente"
                    });                    
                }else{
                    res.json({
                        status: false,
                        mensaje:"Su pedido NO se realizo."
                    });
                
                }
            })
      
    
});


// //////////////////////Nuestras funciones /////////
function verificarToken(req, res, next){
    // console.log('controlo lo que llega', req.headers)
    const BearerHeader= req.headers['authorization']
    if(typeof BearerHeader!=='undefined'){
        const bearerToken= BearerHeader.split(" ")[1]
        req.token=bearerToken;
        next();
    }else{
         res.send('Para consultar las apis debe estar autenticado.Gracias');
    }
}

function esNumero(parametro) {
    if(!isNaN(parseInt(parametro))){
        return false
    } else {
        return true
    }
}

module.exports = router;

