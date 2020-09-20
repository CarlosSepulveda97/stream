const express = require('express')
const app = express()

//creamos un servidor http a partir de la libreria de express
const http = require('http').Server(app);

//para generar una comunicacion vamos a trabajar con socket io

const io = require('socket.io')(http);
app.set('port', process.env.PORT || 3000);
app.use(require ('./routes/stream.routes'));

//donde vamos a cargar los html con los que vamos a trabjar 

app.use(express.static(__dirname + "/public" ))

io.on('connection', (socket) => {
    socket.on('stream', (image)=>{
        //emitir el evento a todos los sockets conectados
        socket.broadcast.emit('stream', image);//canal de comunicacion dentro del servidor
    })
})

module.exports = http;

