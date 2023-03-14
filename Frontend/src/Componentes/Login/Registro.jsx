import { useState } from "react"
import { Link } from "react-router-dom";
import * as API from '../../servicios/servicios'

export function Registro(){
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nombre_apellido, setNombre_Apellido] = useState('');
    const [DNi, setDNi] = useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('');
    const [mensajeError, setmensajeError] = useState('');


    const registroForm  = async (event)=>{
        event.preventDefault();
        const user = await API.Registro({usuario, password, email, nombre_apellido})
        if(user.status){
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('');
            }, 4000)
            // window.location.reload(true)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('');
            }, 4000)
        }
    }
    return(
        <>
        <div className="container">
        {
            mensajeSuccess?
            <div className="alert alert-success" role="alert">
                {mensajeSuccess}
            </div>:''
        }
        {
            mensajeError?
            <div className="alert alert-danger" role="alert">
                {mensajeError}
            </div>:''
        }
        <div className="card">
            <div className="card-header">
                Crear Usuario
            </div>
            <div className="card-body">
                <form onSubmit={registroForm}> 
                <div className="form-group">
                  <label for="">Nombre Usuario</label>
                  <input required
                  type="text" 
                  value={username} 
                  className="form-control" 
                  placeholder="Nombre del Usuario" 
                  onChange={(event)=>setUsuario(event.target.value)} />
                  
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>

                <div className="form-group">
                  <label for="">Password</label>
                  <input required
                  type="password" 
                  value={password} 
                  className="form-control" 
                  placeholder="Password" 
                  onChange={(event)=>setPassword(event.target.value)} />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label for="">Email</label>
                  <input required
                  type="email" 
                  value={email} 
                  className="form-control" 
                  placeholder="Correo Electronico" 
                  onChange={(event)=>setEmail(event.target.value)} />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label for=""> Nombre y Apelllido de Usuario</label>
                  <input 
                  type="text" required
                  value={apellido_nombre} 
                  className="form-control" 
                  placeholder="Nombre y Apelllido de Usuario" 
                  onChange={(event)=>setnombre_apellido(event.target.value)} />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group">
                  <label for=""> DNi (sin puntos) </label>
                  <input 
                  type="text" required
                  value={DNi} 
                  className="form-control" 
                  placeholder="DNi de Usuario" 
                  onChange={(event)=>setDNi(event.target.value)} />
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div> 
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                     <option selected>Open this select menu</option>
                     <option value="1">Cliente</option>
                     <option value="2">Proveedor</option>
                     <option value="3">Empleado</option>
                    </select>
                </div>     
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <Link to={'/'}><button type="button" className="btn btn-secondary">Volver</button></Link>
                </div>
                </form>
                
            </div>
            
            <div className="card-footer text-muted">
               EN PATAS
            </div>
        </div>
        </div>
        </>
    )
}