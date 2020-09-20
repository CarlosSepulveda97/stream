const http = require('./app')

http.listen(app.get('port'), () => {
    console.log('Servidor en el puerto:' + app.get('port'))
})