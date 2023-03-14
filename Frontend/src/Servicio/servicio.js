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


export async function getPedidoById(id_){
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
  



// traer los Usuarios_Empresa
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

    
export async function BuscarusUarios_Empresa(filtros){
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

    
export function SaveUsuarios_Empresa(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/usuarios_empresa`, requestOptions)
    
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

export async function BajaUsuarios_Empresa(id_usuario_empresa){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajausuario/${id_usuario_empresa}`, requestOptions)
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
        const response = await fetch(`${API_URL}/altausuario/${id_usuario_empresa}`, requestOptions)
        const data = await response.json();
        // console.log(data)
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
        const response = await fetch(`${API_URL}/altacurso/${id_pedido}`, requestOptions)
        const data = await response.json();
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

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

export async function getClienteById(id_cliente){
    try{
        const response = await fetch(`${API_URL}/alumnos/${id_cliente}`);
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
    fetch(`${API_URL}/alumnos/${id_cliente}`, requestOptions)
    
}


export async function getSolicitudPedidoByIdCliente(id_cliente){
    try{
        const response = await fetch(`${API_URL}/inscripciones/${id_cliente}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

// export async function getCursosSinAsignar(id_alumno){
//     try{
//         const response = await fetch(`${API_URL}/cursosSinAsignar/${id_alumno}`);
//         const data = await response.json();
//         return data;
//     }catch(error){
//         console.log('Nuestro error', error);
//     }
// }