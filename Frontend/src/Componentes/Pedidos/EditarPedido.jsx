import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../servicio/servicio'

export function EditarPedido(){
    const {id_pedido} = useParams();
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [id_cliente, setIdCliente] = useState('');
    const [fecha_entrega, setFecha_Entrega] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [stock, setStock] = useState('');
   
   
    useEffect(()=>{
        trae_datos_pedido(id_pedido)
    },[])

    const trae_datos_pedido  = async ()=>{
        const datos_pedido = await API.getPedidoById(id_pedido)
        console.log(datos_pedido);
        setIdCliente(datos_pedido.id_cliente)
        setDni(datos_pedido.fecha_entrega)
        setUsuario(datos_pedido.cantidad)
        setEmail(datos_pedido.stock)
        
    }
    const editar_pedido = ()=>{
        const datos_enviar={
          id_cliente: id_cliente,
          fecha_entrega: fecha_entrega,
          cantidad: cantidad,
          stock: stock,

        };
        API.UpdatePedido(id_pedido,datos_enviar);
        setmensajeSuccess('Se Edito el Pedido')
            setTimeout(()=>{
                setmensajeSuccess('')
            }, 2000)
    }
    return (
        <div className="card">
            <div className="card-header">
                Edicion de los datos del Pedido
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
                  <label for=""> ID Cliente </label>
                  <input 
                  type="text"
                   value={id_cliente} 
                   onChange={(event)=>setIdCliente(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Fecha de Entrega</label>
                  <input 
                  type="text"
                   value={fecha_entrega} 
                   onChange={(event)=>setFecha_Entrega(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for=""> Cantidad </label>
                  <input 
                  type="text"
                   value={cantidad} 
                   onChange={(event)=>setCantidad(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for=""> Stock </label>
                  <input 
                  type="date"
                   value={stock} 
                   onChange={(event)=>setStock(event.target.value)}
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
