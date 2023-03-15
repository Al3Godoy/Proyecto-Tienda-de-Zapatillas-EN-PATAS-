import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicio/servicio'

export function CreaAlumno(){

    
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [descripcion, setDescripcion] = useState('');
       
    const crear_tipo_calzado = ()=>{
        const datos_tipo_calzado={
            descripcion: descripcion
        };
        console.log(datos_tipo_calzado)
        API.SaveTipo_Calzado(datos_tipo_calzado);
        setmensajeSuccess('Se agrego un nuevo tipo de calzado')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href('/Tipo_Calzados')
            }, 2000)
    }
};
    return(
        <div className="card">
            <div className="card-header">
                Edicion de los datos del Tipo de Calzado
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
                
                <div className="row">
                    <div className='col-3 mt-3'>
                        <button  onClick={crear_tipo_calzado}  type="button" className="btn btn-primary">Guardar</button>
                        <Link to={'/ListaTipo_Calzado'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted">
               EN PATAS
            </div>
        </div>
    )