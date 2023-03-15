import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../../servicio/servicio'
import { } from 'bootstrap'
import DataTable from 'react-data-table-component'

export function ListaClientes(){
    const [clientes, setClientes] =useState([]);
    const [color, setColor] =useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeSuccessSolicitudPedido, setmensajeSuccessSolicitudPedido] = useState('')

    // los filtros de busqueda
    const [nombre_apellido, setNombre_Apellido] = useState('');
    const [DNi, setDni] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');

    const [solicitud, setSolicitud] = useState([]);
    const [pedidos, setPedidos] = useState([]);
    const [id_cliente, setIdCliente] = useState();
    const [id_pedido, setIdPedido] = useState();
   

    // aqui se carga por primera vez la variable
useEffect(()=>{
    API.getclientes().then(getClientes)
},[]);

// esta es la funcion para cambiar de estado 
const CambioEstadoClientes  = async(id, estado)=>{
    if(estado=='B'){
        setColor('danger')
    }else{
        setColor('success')
    }
    
    const datos_enviar={
        estado: estado
    };
    const respuesta = await API.CambioEstadoClientes(id, datos_enviar)
    if(respuesta.status){
        setmensajeSuccess(respuesta.mensaje)
        
        setTimeout(()=>{
            setmensajeSuccess('')
            window.location.reload(true)
        }, 2000)
    }else{
        setmensajeSuccess(respuesta.mensaje)
        
        setTimeout(()=>{
            setmensajeSuccess('')
        }, 4000)
    }
    
}
// funcion para buscar alumnos 
const buscar_cliente = ()=>{
    
    const filtros={
        nombre_apellido: nombre_apellido,
        DNi: DNi,
        usuario: usuario,
        email: email,
    };

    API.BuscarClientes(filtros).then(setClientes);
   
}

const limpiar_filtros = ()=>{
    setNombre_Apellido('')
    setDni('')
    setUsuario('')
    email('')
    API.getClientes().then(setClientes)
   
}
// funcion que carga el modal 
const trae_solicitudpedido_cliente = async(id)=>{
    setIdAlumno(id)
    setInscripcion([])
    setCursos([])
    const datos = await API.getSolicitudPedidoByIdCliente(id)
}



const grabar_solicitudpedido_cliente  = async()=>{

    const datos_enviar={
        id_cliente: id_cliente,
        id_pedido: id_pedido,
        descripcion: 'http://url/ruta/'+id_cliente
    };
    // console.log(datos_enviar)
    API.SaveSolicitudPedidoCliente(datos_enviar);
    setmensajeSuccessSolicitudPedido('Se Cargo su Pedido con Gran Exito')
    setTimeout(()=>{
        setmensajeSuccessSolicitudPedido('')
        trae_solicitudpedido_cliente(id_alumno)
    }, 4000)
}

const columns = [
    {
      name: 'ID',
      selector: row => row.id_cliente
    },
    {
      name: 'NOMBRE_APELLIDO',
      selector: row => row.nombre_apellido
    },
    {
      name: 'DNI',
      selector: row => row.DNi
    },
    {
        name: 'EMAIL',
        selector: row => row.email
      },
      {
        name: 'DOMICILIO',
        selector: row => row.domicilio
      },
    {
        cell: (row) => (
            (row.estado=='a')? 
            <button
                className="btn btn-outline btn-xs"
                onClick={(e) => handleButtonClick(e, row.id_alumno)}
            >
                Baja
            </button>
            :
            <button
                className="btn btn-outline btn-xs"
                onClick={(e) => handleButtonClick(e, row.id_alumno)}
            >
                Alta
            </button>
            

        ),
    }

  ]

  const handleButtonClick = (e, id) => {
    e.preventDefault();
    console.log("el Id es", id);
};
    return(
        <>
        <div className="card">
            {
                mensajeSuccess?
                <div className={`alert alert-${color}`} role="alert">
                    {mensajeSuccess}
                </div>:''
            }
             <div className="card">
                <div className="card-header">
                    Filtros de busqueda
                </div>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-3'>
                            <label>Nombre y Apellido </label>
                            <input 
                            id='nombre_apellido'
                            className='form-control'
                            value={nombre_apellido} 
                            onChange={(event)=>setNombre_Apellido(event.target.value)}
                            />
                        </div>
                        <div className='col-3'>
                            <label>Dni </label>
                            <input 
                            value={dni} 
                            onChange={(event)=>setDni(event.target.value)}
                            className='form-control'/>
                        </div>
                        <div className='col-3'>
                            <label>Email </label>
                            <input 
                            id='Email'
                            className='form-control'
                            value={Email} 
                            onChange={(event)=>setEmail(event.target.value)}
                            />
                        </div>
                        <div className='col-3'>
                            <label>Domicilio </label>
                            <input 
                            id='Domicilio'
                            className='form-control'
                            value={Domicilio} 
                            onChange={(event)=>setDomicilio(event.target.value)}
                            />
                        </div>
                      
                    <div className='row mt-3'>
                        <div className='col-6' >
                            <button onClick={buscar_cliente}  className='btn btn-primary'>Buscar</button>
                            <button onClick={limpiar_filtros}  className='btn btn-dark'>Limpiar Filtros</button>
                        </div>
                        


                    </div>
                    
                </div>
            </div>
            
            <div className="card-header">
                Listado de Clientes 
            </div>
           
               
            </div>
            <div className="card-footer text-muted">
                EN PATAS
            </div>
        </div>
        
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">SolicitudPedido</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                {
                mensajeSuccessInscripcion?
                    <div className="alert alert-success" role="alert">
                        {mensajeSuccessSolicitudPedido}
                    </div>:''
                }
                <div className="form-group">
                <div className='row'>
                        <div className='col-4'>
                            <label for="">Nombre del curso</label>
                          
                            <select onChange={(event)=>setIdCurso(event.target.value)} className='form-control'>
                                    <option>Seleccionar un curso</option>
                                        {
                                    cursos?
                                    cursos.map((c)=>(
                                        <option value={c.id_curso}>{c.nombre}</option>
                                    )):
                                        <option value='F'>No Contiene mas cursos</option>
                                    }
                                </select>
                        </div>
                        <div className='col-4'>
                        <label>Observacion </label>
                            <input 
                            id='descripcion'
                            disabled
                            className='form-control'
                            value={'url/ruta/'+id_alumno} 
                            
                            />
                        </div>
                 </div>    
                <button type="button" onClick={() => grabar_inscripciones_alumno()}  className="btn btn-primary" >Guardar</button>
                   
                 
                </div>
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            
                            <th>Curso</th>
                            <th>Nota</th>
                            <th>Fecha inscripcion</th>
                            <th>Comentario</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                    inscripciones?
                    inscripciones.map((inscrip)=>(
                            <tr>
                                <td scope="row">{inscrip.curso}</td>
                                <td scope="row">{inscrip.nota}</td>
                                <td scope="row">{inscrip.fecha_formateada}</td>
                                <td scope="row">{inscrip.descripcion}</td>
                                </tr>
                    ))
                    :
                    <tr>
                        <td colSpan={4} scope="row">No tiene solicitud de Pedidos</td>
                    </tr>
                    }
                    </tbody>
                </table>
                </div>
                
                </div>
            </div>
        </div>
        </>
        
    )
}