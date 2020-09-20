const http = require('./app')

http.listen(http.get('port') , () => {
    console.log('Servidor en el puerto:' + app.get('port'))
})