import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import * as API from '../../servicio/servicio'

export function EditarMarca_Calzado(){
    const {id_marca_calzado} = useParams();
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [descripcion, setDescripcion] = useState('');
   
   
    useEffect(()=>{
        trae_datos_marca_calzado(id_cliente)
    },[])

    const trae_datos_marca_calzado  = async ()=>{
        const datos_marca_calzado = await API.getMarca_CalzadoById(id_cliente)
        console.log(datos_marca_calzado);
        setDescripcion(datos_marca_calzado.descripcion)
       
    }
    const editar_marca_calzado = ()=>{
        const datos_enviar={
            descripcion: descripcion,
                       
        };
        API.UpdateCliente(id_marca_calzado,datos_enviar);
        setmensajeSuccess('Se Edito la Marca de Calzado')
            setTimeout(()=>{
                setmensajeSuccess('')
            }, 2000)
    }
    return (
        <div className="card">
            <div className="card-header">
                Edicion de Marcas de Calzado
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
                  <label for="">Descripcion</label>
                  <input 
                  type="text"
                   value={descripcion} 
                   onChange={(event)=>setDescripcion(event.target.value)}
                  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
             </div>  
                <div className="form-group">
                    <button  onClick={editar_marca_calzado}  type="button" className="btn btn-primary">Editar</button>
                    <Link to={'/listar_alumnos'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                </div>
            </div>
            <div className="card-footer text-muted">
               EN PATAS
            </div>
        </div>
    )
}
