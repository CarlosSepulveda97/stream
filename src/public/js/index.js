

//--------------------------------------------
//-------------------DOM----------------------
//--------------------------------------------
var canvas = document.querySelector('#preview');
var context = canvas.getContext('2d')
var btn = document.querySelector('#btn')
canvas.style.display = "none";

canvas.width = 512;
canvas.height = 384;

context.width = canvas.width;
context.height = canvas.height;

var video = document.querySelector('#video')
var socket = io();


//--------------------------------------------
//-------------------scripts----------------------
//--------------------------------------------
function publicarMensaje(msg){
    //document.querySelector('.status').innerText = msg;
}

function loadCamara(stream){
    video.srcObject = stream;
    publicarMensaje('camara funcionando')
}

function errorCamara(){
    publicarMensaje('camara ha fallado')
}


//--------------------------------------------
//-------------------socket----------------------
//--------------------------------------------
function verVideo(vid, con){
    con.drawImage(vid, 0, 0, con.width, con.height)
    socket.emit('stream', canvas.toDataURL('image/webp'))
}

socket.on('stream', (image) =>{
    let img = document.getElementById('play')
    img.src = image
})


//--------------------------------------------
//-------------------EVENTOS----------------------
//--------------------------------------------
btn.addEventListener('click', () =>{
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia)

    if (navigator.getUserMedia){
        navigator.getUserMedia({video:true}, loadCamara, errorCamara)
    }

    var intervalo = setInterval(()=>{
        verVideo(video, context)
    },500)
})