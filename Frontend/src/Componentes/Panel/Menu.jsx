import { useEffect, useState } from 'react'
import { Rutas, Rutas, Link } from 'react-router-dom'
import { Principal } from './Principal'
export function Menu(){
    const [usuario, setUsuario] =useState('')
    const [nombre_usuario, setNombreUsuario] =useState('')
    const logout  = async (event)=>{
            setUsuario('')
            window.localStorage.removeItem('usuario')
            window.location.reload(true);
    }
    useEffect(()=>{
      const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'))
      if(usuarioLogueado){
        setNombreUsuario(usuarioLogueado.datos[0].apellido_nombre)
      }
    },[])
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Sistema</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to={'/'}>Inicio</Link>
                </li>
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pedidos
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to={'/listar_pedidos'}>Listar Pedidos</Link>
                    <Link className="dropdown-item" to={'/crear_pedido'}>Solicitud de Pedido</Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Clientes
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to={'/listar_clientes'}>Listar Clientes</Link>
                    <Link className="dropdown-item" to={'/crear_cliente'}>Crear Cliente</Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Usuarios
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to={'/listar_usuarios'}>Listar usuarios</Link>
                  </div>
                </li>
                <li className="nav-item active">
                  { nombre_usuario }
                  <button onClick={logout} className='btn btn-danger'> Salir</button>
                </li>
              </ul>
            </div>
            
          </nav>
          <Principal/>
      </>
        
          
        //         
    )
}