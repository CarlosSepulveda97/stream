
module.exports = function (io){
io.on('connection', (socket) => {
    socket.on('stream', (image)=>{
        //emitir el evento a todos los sockets conectados
        socket.broadcast.emit('stream', image);//canal de comunicacion dentro del servidor
    })
})
}

