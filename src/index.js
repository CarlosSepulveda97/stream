const http = require('./app')

http.listen(3000, () => {
    console.log('Servidor en el puerto:' + app.get('port'))
})