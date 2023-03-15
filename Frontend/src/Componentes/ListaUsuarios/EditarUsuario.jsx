import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../servicio/servicio'

export function EditarCliente(){
    const {id_cliente} = useParams();
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [nombre_apellido, setNombre_Apellido] = useState('');
    const [dni, setDni] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [provincia, setProvincia] = useState('');
    const [cp, setCP] = useState('');
    const [domicilio, setDomicilio] = useState('');
   
    useEffect(()=>{
        trae_datos_cliente(id_cliente)
    },[])

    const trae_datos_cliente  = async ()=>{
        const datos_cliente = await API.getAlumnoById(id_cliente)
        console.log(datos_cliente);
        setNombre_Apellido(datos_cliente.nombre_apellido)
        setDni(datos_cliente.DNi)
        setUsuario(datos_cliente.usuario)
        setEmail(datos_cliente.email)
        setCiudad(datos_cliente.ciudad)
        setProvincia(datos_cliente.provincia)
        setCP(datos_cliente.cp)
        setDomicilio(datos_cliente.domicilio)

        setFechaN(datos_alumno.fecha_formateada)
    }
    const editar_cliente = ()=>{
        const datos_enviar={
            nombre_apellido: nombre_apellido,
            dni: dni,
            usuario: usuario,
            email: email,
            ciudad: ciudad,
            provincia: provincia,
            cp: cp,        
            domicilio: domicilio,
            
        };
        API.UpdateCliente(id_cliente,datos_enviar);
        setmensajeSuccess('Se Edito el cliente')
            setTimeout(()=>{
                setmensajeSuccess('')
            }, 2000)
    }
    return (
        <div className="card">
            <div className="card-header">
                Edicion de los datos del cliente
            </div>
            {
                mensajeSuccess?
                <div className="alert alert-success" role="alert">
                    {mensajeSuccess}
                </div>:''
            }
            <div className="card-body">
                <div className='row'>

                <div className="form-group col-4" >
                  <label for="">Nombre_Apellido</label>
                  <input 
                  type="text"
                   value={nombre} 
                   onChange={(event)=>setNombre_Apellido(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">DNi</label>
                  <input 
                  type="text"
                   value={apellido} 
                   onChange={(event)=>setDNi(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Usuario</label>
                  <input 
                  type="text"
                   value={dni} 
                   onChange={(event)=>setUsuario(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Email</label>
                  <input 
                  type="date"
                   value={fecha_nacimiento} 
                   onChange={(event)=>setEmail(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4" >
                  <label for="">Ciudad</label>
                  <input 
                  type="text"
                   value={domicilio} 
                   onChange={(event)=>setCiudad(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Provincia</label>
                  <input 
                  type="text"
                   value={estado_civil} 
                   onChange={(event)=>setProvincia(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">CP</label>
                  <input 
                  type="text"
                   value={sexo} 
                   onChange={(event)=>setCP(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">CP</label>
                  <input 
                  type="text"
                   value={sexo} 
                   onChange={(event)=>setCP(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                </div>
                
                <div className="form-group">
                    <button  onClick={editar_cliente}  type="button" className="btn btn-primary">Editar</button>
                    <Link to={'/listar_alumnos'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                </div>
            </div>
            <div className="card-footer text-muted">
               EN PATAS
            </div>
        </div>
    )
}
