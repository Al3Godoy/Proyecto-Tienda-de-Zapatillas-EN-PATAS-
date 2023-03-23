const API_URL ='http://localhost:3300'

export async function getPedidos() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(`${API_URL}/pedidos`, requestOptions);
      const data = await response.json(); // Await la respuesta de la promesa
      return data;
    } catch(error) {
      console.log('Nuestro error', error);
    }
  }


export async function getPedidoById(id_pedido){
    try{
        const response = await fetch(`${API_URL}/Pedidos/${id_pedido}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export function UpdatePedido(id_cliente, fecha_entrega, estado, cantidad, id_stock) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_cliente, fecha_entrega, estado, cantidad, id_stock })
    };
    fetch(`${API_URL}/solicitud`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al crear la solicitud de pedido');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // se puede realizar alguna acción con la respuesta del servidor
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  export function SavePedido(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/Pedidos`, requestOptions)
    
}


export function SaveSolicitud_Pedidos(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/solicitud_pedidos`, requestOptions)
    
}

//////////////////////////////////
////traer los Usuarios_Empresa////
/////////////////////////////////
export async function getUsuarios_Empresa(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/usuarios_empresa`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

    
export async function BuscarUsuarios_Empresa(filtros){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filtros)
    };
    const response = await fetch(`${API_URL}/buscar_usuarios_empresa`, requestOptions)
    const data = await response.json();
        return data;
}
  
//////////////////////////////////
////// Traer los Proveedores//////
/////////////////////////////////

export async function getProveedores(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/proveedores`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export async function BuscarProveedores(filtros){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filtros)
    };
    const response = await fetch(`${API_URL}/buscar_proveedores`, requestOptions)
    const data = await response.json();
        return data;
}

//////////////////////////////////
 ////// Traer los Clientes//////
/////////////////////////////////
 
export async function getClientes(){
    const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/clientes`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export async function BuscarClientes(filtros){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filtros)
    };
    const response = await fetch(`${API_URL}/buscar_clientes`, requestOptions)
    const data = await response.json();
        return data;
}

export function SaveUsuarios_Empresa(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/Usuarios_Empresa`, requestOptions)
    
}

export function SaveClientes(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/Clientes`, requestOptions)
    
}

export function SavePreoveedores(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/Proveedores`, requestOptions)
    
}

export function SaveStock(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/Stock`, requestOptions)
    
}

export async function Login(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/login`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function Registro(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/registro`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
    } catch(e){
    }
}


///////////////////////////////////////////
/////////////// ALTAS y BAJAS /////////////
///////////////////////////////////////////

export async function BajaUsuarios_Empresa(id_usuario_empresa){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajausuario_empresa/${id_usuario_empresa}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaUsuarios_Empresa(id_usuario_empresa){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altausuario_empresa/${id_usuario_empresa}`, requestOptions)
        const data = await response.json();
           return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function BajaPedido(id_pedido){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try{
        const response = await fetch(`${API_URL}/bajapedido/${id_pedido}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaPedido(id_pedido){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altapedido/${id_pedido}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function BajaProveedores(id_proveedor){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajaproveedor/${id_proveedor}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaProveedores(id_proveedor){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altaproveedor/${id_proveedor}`, requestOptions)
        const data = await response.json();
           return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function BajaMarca_Calzado(id_marca_calzado){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try{
        const response = await fetch(`${API_URL}/bajamarca_calzado/${id_marca_calzado}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaMarca_Calzado(id_marca_calzado){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altamarca_calzado/${id_marca_calzado}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}


export async function BajaTipo_Calzado(id_tipo_calzado){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try{
        const response = await fetch(`${API_URL}/bajatipo_calzado/${id_tipo_calzado}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaTipo_Calzado(id_tipo_calzado){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altatipo_calzado/${id_tipo_calzado}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}


export async function BajaStock(id_stock){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try{
        const response = await fetch(`${API_URL}/bajatipo_calzado/${id_stock}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaStock(id_stock){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altatipo_calzado/${id_stock}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}


///////////////////////////////////////////
///////////// Cambios de Estado //////////
///////////////////////////////////////////

export async function CambioEstadoCliente(id_cliente, datos){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    };
    try{
        const response = await fetch(`${API_URL}/cambioestadocliente/${id_cliente}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function CambioEstadoProveedor(id_proveedor, datos){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    };
    try{
        const response = await fetch(`${API_URL}/cambioestadoproveedor/${id_proveedor}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function CambioEstadoUsuarios_Empresa(id_usuario_empresa, datos){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    };
    try{
        const response = await fetch(`${API_URL}/cambioestadosuario_empresa/${id_usuario_empresa}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}


export async function getClientesById(id_cliente){
    try{
        const response = await fetch(`${API_URL}/clientes/${id_cliente}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export function UpdateCliente(id_cliente, datos){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/clientes/${id_cliente}`, requestOptions)
    
}


export async function getSolicitudPedidoByIdCliente(id_cliente){
    try{
        const response = await fetch(`${API_URL}/solicitudpedido/${id_cliente}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export async function getPedidosByIdPedido(id_pedido) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(`${API_URL}/Pedidos`, requestOptions);
      const data = await response.json(); // Await la respuesta de la promesa
      return data;
    } catch(error) {
      console.log('Nuestro error', error);
    }
  }

///////////////////////////////
//////////// STOCK ////////////
///////////////////////////////
export async function getStockById(id_stock){
    try{
        const response = await fetch(`${API_URL}/Stock/${id_stock}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}

export function UpdateStock(precio, cantidad, estado, id_proveedor, id_marca_calzado, id_tipo_calzado) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ precio, cantidad, estado, id_proveedor, id_marca_calzado, id_tipo_calzado })
    };
    fetch(`${API_URL}/entrega`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al crear en la entrega de stock');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // se puede realizar alguna acción con la respuesta del servidor
      })
      .catch(error => {
        console.log(error);
      });
  }

///////////////////////////////////////////
//////////// Tipos de Calzados ////////////
///////////////////////////////////////////

  export async function getListaTipos_Calzados() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(`${API_URL}/listatipos_calzados`, requestOptions);
      const data = await response.json(); // Await la respuesta de la promesa
      return data;
    } catch(error) {
      console.log('Nuestro error', error);
    }
  }


export async function getTipos_CalzadosById(id_tipo_calzado){
    try{
        const response = await fetch(`${API_URL}/Tipos_Calzados/${id_tipo_calzado}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}


///////////////////////////////////////////
//////////// Marcas de Calzados ////////////
///////////////////////////////////////////

export async function getListaMarcas_Calzados() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(`${API_URL}/ListaMarcas_Calzados`, requestOptions);
      const data = await response.json(); // Await la respuesta de la promesa
      return data;
    } catch(error) {
      console.log('Nuestro error', error);
    }
  }


export async function getMarcas_CalzadosById(id_marca_calzado){
    try{
        const response = await fetch(`${API_URL}/Marcas_Calzados/${id_marca_calzado}`);
        const data = await response.json();
        return data[0];
    }catch(error){
        console.log('Nuestro error', error);
    }
}