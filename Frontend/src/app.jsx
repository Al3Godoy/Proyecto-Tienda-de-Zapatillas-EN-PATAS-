import { Routes, Route, Link } from 'react-router-dom'
import { ListaPedidos } from './componentes/Pedidos/ListaPedidos'
import { CreaTipo_Calzado } from './componentes/Tipos_Calzados/CrearTipo_Calzado'
import { Principal } from './componentes/panel/Principal'
import { ListaClientes } from './componentes/clientes/ListaClientes'
import { CreaMarca_Calzado } from './componentes/Marcas_Calzados/CrearMarca_Calzado'
import { Login } from './componentes/login/Login'
import { Menu } from './componentes/panel/Menu'
import { Registro } from './componentes/login/Registro'
import { useEffect, useState } from 'react'
import { ListaUsuarios } from './componentes/ListaUsuarios/ListaUsuarios'
import { EditarPedido } from './componentes/Pedidos/EditarPedido'
import { EditarCliente } from './componentes/clientes/EditarCliente'


function App() {
  const [usuario, setUsuario] = useState('');

  useEffect(()=>{
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'))
    if(usuarioLogueado){
      setUsuario(usuarioLogueado)
    }
  },[])
  
  return (
    <>
    {
      !usuario?
      <>
        <Routes>
             <Route path='/' element={<Login/>}></Route>
             <Route path='/registro' element={<Registro/>}></Route>
        </Routes>
      </>:
        <div className='container'>
         <Menu/> 
         <Routes>
             <Route path='/' element={<Principal/>}></Route>
             <Route path='/listar_pedidos' element={<ListaPedidos/>}></Route>
             <Route path='/crear_tipo_calzado' element={<CreaTipo_Calzado/>} ></Route>
             <Route path='/editar_pedido/:id_pedido' element={<EditarPedido/>} ></Route>
             <Route path='/listar_clientes' element={<ListaClientes/>} ></Route>
             <Route path='/crear_marca_calzado' element={<CreaMarca_Calzado/>} ></Route>
             <Route path='/listar_usuarios' element={<ListaUsuarios/>} ></Route>
             <Route path='/editar_cliente/:id.cliente' element={<EditarCliente/>} ></Route>
             <Route path='/editar_tipo_calzado/:id.tipo_calzado' element={<EditarTipo_Calzado/>} ></Route>
             <Route path='/listar_tipo_calzado' element={<ListaTipo_Calzado/>} ></Route>
             <Route path='/editar_marca_calzado/:id.marca_calzado' element={<EditarMarca_Calzado/>} ></Route>
             <Route path='/listar_marca_calzado' element={<ListaMarca_Calzado/>} ></Route>
             <Route path='/crear_marca_calzado' element={<CreaMarca_Calzado/>} ></Route>
             <Route path='/listar_proveedores' element={<ListaProveedores/>} ></Route>
             <Route path='/editar_proveedor/:id.proveedor' element={<Editar_Proveedor/>} ></Route>


          </Routes>
        </div>
    }
           
    </>
  )
}

export default App
