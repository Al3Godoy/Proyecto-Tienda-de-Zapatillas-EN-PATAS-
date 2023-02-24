const { request } = require('express');
const express = require('express')
const app = express();
//const bodyParser = require('body-parser')
//const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
const morgan= require ('morgan');
//configuracion
app.set('puerto', process.env.PORT || 3300);
// middlewares
app.use(morgan('dev'));
app.use(require('./router/router'));
// rutas para mi aplicacion
app.get('/', (request, res)=>{
    console.log('esto sera la ruta base');
});
// inicia el servidor NODE
app.listen(app.get('puerto'), ()=>{
    console.log('el servidor esta corriendo');
});