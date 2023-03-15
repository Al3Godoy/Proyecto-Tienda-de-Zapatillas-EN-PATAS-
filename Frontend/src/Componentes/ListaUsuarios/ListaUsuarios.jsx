import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../../servicio/servicio'

export function ListUsuarios(){

    const [usuarios, setUsuarios] = useState([]);
    const [mensajeError, setmensajeError] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')

    useEffect(()=>{
        API.getUsuarios().then(setUsuarios)
    },[])
    
    
    const bajaUsuario  = async(id)=>{
        const user = await API.BajaUsuario(id)
        // const user = await API.bajaUsuario(id)
        if(user.status){
            
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
                window.location.reload(true)
 
            }, 3000)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }

    const altaUsuario  = async(id)=>{
        const user = await API.AltaUsuario(id)
        if(user.status){
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.reload(true)
            }, 3000)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }
    return(
        <>
        <div className="card">
            <div className="card-header">
                Listado de Usuarios
            </div>
            {
                    mensajeError?
                    <div class="alert alert-warning" role="alert">
                     {mensajeError}
                    </div>:''
                }

                {
                    mensajeSuccess?
                    <div class="alert alert-success" role="alert">
                     {mensajeSuccess}
                    </div>:''
                }
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre y Apellido</th>
                            <th>Nombre de usuario</th>
                            <th>Estado</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios_empresa.map((usuario_empresa)=>(
                        <tr key={usuario_empresa.id}>
                            <td scope="row">{usuario_empresa.id}</td>
                            <td>{usuario_empresa.nombre_apellido}</td>
                            <td>{usuario_empresa.usuario}</td>
                            <td>{usuario_empresa.estado}</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="">
                                    { (usuario_empresa.estado=='A')?  
                                    <button onClick={() => bajaUsuario(usuario_empresa.id)} type="button" className="btn btn-danger">Dar de Baja</button>
                                    :
                                    <button onClick={() => altaUsuario(usuario_empresa.id)} type="button" className="btn btn-success">Dar de Alta</button>
                                    }
                                    </div>
                            </td>
                        </tr>
                       ))}
                    </tbody>
                    <tbody>
                        {clientes.map((cliente)=>(
                        <tr key={cliente.id}>
                            <td scope="row">{cliente.id}</td>
                            <td>{cliente.nombre_apellido}</td>
                            <td>{cliente.usuario}</td>
                            <td>{cliente.estado}</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="">
                                    { (cliente.estado=='A')?  
                                    <button onClick={() => bajaUsuario(cliente.id)} type="button" className="btn btn-danger">Dar de Baja</button>
                                    :
                                    <button onClick={() => altaUsuario(cliente.id)} type="button" className="btn btn-success">Dar de Alta</button>
                                    }
                                    </div>
                            </td>
                        </tr>
                       ))}
                    </tbody>
                    <tbody>
                        {proveedores.map((proveedor)=>(
                        <tr key={proveedor.id}>
                            <td scope="row">{proveedor.id}</td>
                            <td>{proveedor.nombre_apellido}</td>
                            <td>{proveedor.usuario}</td>
                            <td>{proveedor.estado}</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="">
                                    { (cliente.estado=='A')?  
                                    <button onClick={() => bajaUsuario(proveedor.id)} type="button" className="btn btn-danger">Dar de Baja</button>
                                    :
                                    <button onClick={() => altaUsuario(proveedor.id)} type="button" className="btn btn-success">Dar de Alta</button>
                                    }
                                    </div>
                            </td>
                        </tr>
                       ))}
                    </tbody>
                    
                </table>
            </div>
            <div className="card-footer text-muted">
               EN PATAS
            </div>
        </div>
        </>
        
        
    )
 }