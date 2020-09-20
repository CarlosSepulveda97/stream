const http = require('./app')

const express = require('express')
const app = express()

//creamos un servidor http a partir de la libreria de express
const server = http.createServer(app);

//para generar una comunicacion vamos a trabajar con socket io

const io = require('socket.io').listen(server);
app.set('port', process.env.PORT || 3000);
app.use(require ('./routes/stream.routes'));

//donde vamos a cargar los html con los que vamos a trabjar 

require('./app')(io)
app.use(express.static(__dirname + "/public" ))

server.listen(app.get('port') , () => {
    console.log('Servidor en el puerto:' + app.get('port'))
})