import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'
import { } from 'bootstrap';
import DataTable from 'react-data-table-component';

export function ListaPedidos(){
    const [pedidos, setPedidos] = useState([]);
    const [color, setColor] = useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeSuccessSolicitudPedido, setmensajeSuccessSolicitudPedido] = useState('')

    // los filtros de busqueda
    const [id_pedido, setIdPedido] = useState('');
    const [id_cliente, setIdCliente] = useState('');
    const [fecha_entrega, setFecha_Entrega] = useState('');
    const [cantidad, setCantidad] = useState('');

    const [solicitudpedido, setSolicitudPedido] = useState([]);
    const [id_cliente_pedido, setIdCliente_Pedido] = useState();
    const [id_pedido, setIdPedidos] = useState();
}
    // aqui se carga por primera vez la variable
useEffect(()=>{
    API.getpedidos().then(getPedidos)
},[]);

// esta es la funcion para cambiar de estado 
const CambioEstadoPedidos  = async(id, estado)=>{
    if(estado=='b'){
        setColor('danger')
    }else{
        setColor('success')
    }
    
    const datos_enviar={
        estado: estado
    };
    const respuesta = await API.CambioEstadoPedidos(id, datos_enviar)
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
const buscar_pedido = ()=>{
    
    const filtros={
        id_pedido: id_pedido,
        id_cliente: id_cliente,
        fecha_entrega: fecha_entrega,
        cantidad: cantidad,
    };

    API.BuscarPedidos(filtros).then(setpedidos);
   
}

const limpiar_filtros = ()=>{
    setId_Pedido('')
    setId_cliente('')
    setfecha_entrega('')
    setcantidad('')
    API.getPedidos().then(setPedidos)
   
}
// funcion que carga el modal 
const trae_solicitudpedido_cliente = async(id)=>{
    setIdPedido(id)
    setSolicitudPedido([])
    setCliente([])
    const datos = await API.getSolicitudPedidoByIdCliente(id)
   
const grabar_solicitudpedido_cliente  = async()=>{

    const datos_enviar={
        id_pedido: id_cliente,
        id_cliente: id_pedido,
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
      selector: row => row.id_pedido
    },
    {
        name: 'ID',
        selector: row => row.id_cliente
      },
    {
      name: 'FECHA_ENTREGA',
      selector: row => row.fecha_entrega
    },
    {
      name: 'CANTDAD',
      selector: row => row.cantidad
    },
  
    {
        cell: (row) => (
            (row.estado=='a')? 
            <button
                className="btn btn-outline btn-xs"
                onClick={(e) => handleButtonClick(e, row.id_pedido)}
            >
                Baja
            </button>
            :
            <button
                className="btn btn-outline btn-xs"
                onClick={(e) => handleButtonClick(e, row.id_pedido)}
            >
                Alta
            </button>
            

        ),
 
        } ]

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
                            <label>id_pedido </label>
                            <input 
                            id='id_pedido'
                            className='form-control'
                            value={id_pedido} 
                            onChange={(event)=>setIdPedido(event.target.value)}
                            />
                        </div>
                        <div className='col-3'>
                            <label>id_cliente </label>
                            <input 
                            id='id_cliente'
                            className='form-control'
                            value={nombre} 
                            onChange={(event)=>setIdCliente(event.target.value)}
                            />
                        </div>
                        <div className='col-3'>
                            <label>fecha_entrega </label>
                            <input 
                            value={fecha_entrega} 
                            onChange={(event)=>setFecha_Entrega(event.target.value)}
                            className='form-control'/>
                        </div>
                        <div className='col-3'>
                        <label>cantidad </label>
                        <input 
                        value={cantidad} 
                        onChange={(event)=>setCantidad(event.target.value)}
                        className='form-control'/>
                    </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6' >
                            <button onClick={buscar_pedido}  className='btn btn-primary'>Buscar</button>
                            <button onClick={limpiar_filtros}  className='btn btn-dark'>Limpiar Filtros</button>
                        </div>
                        


                    </div>
                    
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
                mensajeSuccessSolicitudPedido?
                    <div className="alert alert-success" role="alert">
                        {mensajeSuccessSolicitudPedido}
                    </div>:''
                }
                <div className="form-group">
                <div className='row'>
                        <div className='col-4'>
                            <label for="">Pedido numero de ID</label>
                          
                            <select onChange={(event)=>setIdPedido(event.target.value)} className='form-control'>
                                    <option>Seleccionar Pedido</option>
                                        {
                                    pedidos?
                                    pedidos.map((c)=>(
                                        <option value={p.id_pedido}>{p.fecha_entrega}</option>
                                    )):
                                        <option value='F'>Termino con el pedido</option>
                                    }
                                </select>
                        </div>
                        <div className='col-4'>
                        <label>Observacion </label>
                            <input 
                            id='pedidos'
                            disabled
                            className='form-control'
                            value={'url/ruta/'+id_cliente} 
                            
                            />
                        </div>
                 </div>    
                <button type="button" onClick={() => grabar_solicitudpedidos_cliente()}  className="btn btn-primary" >Guardar</button>
                   
                 
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