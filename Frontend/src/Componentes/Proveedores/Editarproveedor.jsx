import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../servicio/servicio'

export function EditarCliente(){
    const {id_proveedor} = useParams();
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [nombre_apellido, setNombre_Apellido] = useState('');
    const [dni, setDni] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [provincia, setProvincia] = useState('');
    const [cp, setCP] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [id_marca_calzado, setIdMarca_Calzado] = useState('');
    const [id_tipo_calzado, setIdTipo_Calzado] = useState('');
   
    useEffect(()=>{
      trae_datos_proveedor(id_proveedor)
    },[])

    const trae_datos_proveedor = async ()=>{
        const datos_proveedor = await API.getAlumnoById(id_proveedor)
        console.log(datos_proveedor);
        setNombre_Apellido(datos_proveedor.nombre_apellido)
        setDni(datos_proveedor.DNi)
        setUsuario(datos_proveedor.usuario)
        setEmail(datos_proveedor.email)
        setCiudad(datos_proveedor.ciudad)
        setProvincia(datos_proveedor.provincia)
        setCP(datos_proveedor.cp)
        setDomicilio(datos_proveedor.domicilio)
        setIdMarca_Calzado(datos_proveedor.id_marca_calzado)
        setIdTipo_Calzado(datos_proveedor.id_tipo_calzado)
    }
    const editar_proveedor = ()=>{
        const datos_enviar={
            nombre_apellido: nombre_apellido,
            dni: dni,
            usuario: usuario,
            email: email,
            ciudad: ciudad,
            provincia: provincia,
            cp: cp,        
            domicilio: domicilio,
            id_marca_calzado: id_marca_calzado,
            id_tipo_calzado: id_tipo_calzado,
            
        };
        API.UpdateProveedor(id_proveedor,datos_enviar);
        setmensajeSuccess('Se Edito el Proveedor')
            setTimeout(()=>{
                setmensajeSuccess('')
            }, 2000)
    }
    return (
        <div className="card">
            <div className="card-header">
                Edicion de los Datos del Proveedor
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
                   value={nombre_apellido} 
                   onChange={(event)=>setNombre_Apellido(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">DNi</label>
                  <input 
                  type="text"
                   value={dni} 
                   onChange={(event)=>setDNi(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Usuario</label>
                  <input 
                  type="text"
                   value={usuario} 
                   onChange={(event)=>setUsuario(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Email</label>
                  <input 
                  type="date"
                   value={email} 
                   onChange={(event)=>setEmail(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4" >
                  <label for="">Ciudad</label>
                  <input 
                  type="text"
                   value={ciudad} 
                   onChange={(event)=>setCiudad(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Provincia</label>
                  <input 
                  type="text"
                   value={provincia} 
                   onChange={(event)=>setProvincia(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">CP</label>
                  <input 
                  type="text"
                   value={cp} 
                   onChange={(event)=>setCP(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Domicilio</label>
                  <input 
                  type="text"
                   value={domicilio} 
                   onChange={(event)=>setDomicilio(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">ID Marca de Calzado</label>
                  <input 
                  type="text"
                   value={id_marca_calzado} 
                   onChange={(event)=>setIdMarca_Calzado(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">ID Tipo de Calzado</label>
                  <input 
                  type="text"
                   value={id_tipo_calzado} 
                   onChange={(event)=>setIdTipo_Calzado(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                </div>
                
                <div className="form-group">
                    <button  onClick={editar_proveedor}  type="button" className="btn btn-primary">Editar</button>
                    <Link to={'/ListaProveedores'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                </div>
            </div>
            <div className="card-footer text-muted">
               EN PATAS
            </div>
        </div>
    )
}
