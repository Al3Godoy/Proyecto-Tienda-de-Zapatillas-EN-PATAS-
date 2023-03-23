import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicio/servicio'
import { } from 'bootstrap';
import DataTable from 'react-data-table-component';

export function ListaMarcas_Calzados(){
    const [marcas_calzados, setMarcas_Calzados] =useState([]);
    const [color, setColor] =useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeSuccessdescripcion, setmensajeSuccessDescripcion] = useState('')

    // los filtros de busqueda
    const [descripcion, setDescripcion] = useState('');
    const [stock, setStock] = useState([]);
    const [id_marca_calzado, setIdMarca_Calzado] = useState();
    const [id_stock, setIdStock] = useState();
   
}
    // aqui se carga por primera vez la variable
useEffect(()=>{
    API.getmarca_calzado().then(setMarcas_Calzado)
},[]);

// esta es la funcion para cambiar de estado 
const CambioEstadoMarcas_Calzados  = async(id, estado)=>{
    if(estado=='a'){
        setColor('danger')
    }else{
        setColor('success')
    }
    
    const datos_enviar={
        estado: estado
    };
    const respuesta = await API.CambioEstadoMarcas_Calzados(id, datos_enviar)
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
    
};
// funcion para buscar marca de calzado
const buscar_marca_calzado = ()=>{
    
    const filtros={
        descripcion: descripcion
    };
    API.Buscar_Marca_Calzado(filtros).then(setMarcas_Calzados);
   
};

const limpiar_filtros = ()=>{
    setDescripcion(''),
    
    API.setMarcas_Calzados().then(setMarcas_Calzados)
   
}


const grabar_marca_calzado  = async()=>{

    const datos_enviar={
        id_marca_calzado: id_stock,
        id_stock: id_pedido,
        descripcion: 'http://url/router/'+id_pedido
    };
     API.SaveMarca_Calzado(datos_enviar);
    setmensajeSuccess;('Se Cargo su Pedido con Gran Exito')
    setTimeout(()=>{
        setmensajeSuccessMarca_Calzado('')
        trae_marca_calzado_stock(id_pedido)
    }, 4000)
}

const columns = [
    {
      name: 'ID',
      selector: row => row.id_marca_calzado
    },
    {
      name: 'DESCRIPCION',
      selector: row => row.descripcion
    },
   
    {
        cell: (row) => (
            (row.estado=='a')? 
            <button
                className="btn btn-outline btn-xs"
                onClick={(e) => handleButtonClick(e, row.id_marca_calzado)}
            >
                Baja
            </button>
            :
            <button
                className="btn btn-outline btn-xs"
                onClick={(e) => handleButtonClick(e, row.id_marca_calzado)}
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
                            <label>Descripcion </label>
                            <input 
                            id='descripcion'
                            className='form-control'
                            value={descripcion} 
                            onChange={(event)=>setDescripcion(event.target.value)}
                            />
                        </div>                              
                       
                    <div className='row mt-3'>
                        <div className='col-6' >
                        <button onClick={buscar_marca_calzado}  className='btn btn-primary'>Buscar</button>
                            <button onClick={limpiar_filtros}  className='btn btn-dark'>Limpiar Filtros</button>
                        </div>                     


                    </div>
                    
                </div>
            </div>
        </div>
           
            <div className="card-footer text-muted">
                EN PATAS
            </div>
              
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva Marca</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                {
                mensajeSuccessNuevaMarca?
                    <div className="alert alert-success" role="alert">
                        {mensajeSuccessNuevaMarca}
                    </div>:''
                }
                <div className="form-group">
                <div className='row'>
                        <div className='col-4'>
                            <label for="">Nombre de la Marca</label>
                            <select onChange={(event)=>setIdMarca_Calzado(event.target.value)} className='form-control'>
                                    <option>Seleccionar una Marca</option>
                                        {
                                    marcas_calzados?
                                    marcas_calzados.map((mc)=>(
                                        <option value={mc.id_marca_calzado}>{mc.descripcion}</option>
                                    )):
                                        <option value='F'>todas las marcas fueron seleccionadas</option>
                                    }
                                </select>
                        </div>
                        <div className='col-4'>
                        <label>Observacion </label>
                            <input 
                            id='descripcion'
                            disabled
                            className='form-control'
                            value={'url/router/'+id_marca_calzado} 
                            
                            />
                        </div>
                 </div>    
                <button type="button" onClick={() => grabar_marca_calzado()}  className="btn btn-primary" >Guardar</button>
                   
                 
                </div>
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            
                            <th>Descripcion</th>
                                                      
                        </tr>
                    </thead>
                    <tbody>
                    {
                    carga?
                    carga.map((carga)=>(
                            <tr>
                                <td scope="row">{carga.descripcion}</td>
                              
                                </tr>
                    ))
                    :
                    <tr>
                        <td colSpan={4} scope="row">Ya fue seleccionada la Marca</td>
                    </tr>
                    }
                    </tbody>
                </table>
                </div>
                
                </div>
            </div>
        </div>
   </div>
    )
    