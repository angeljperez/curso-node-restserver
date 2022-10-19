
const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //Middlewares
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
       
        
    }

    middlewares() {
        //cors
        this.app.use( cors() );

        // Parse y lectura del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use( this.usuariosPath, require('../routes/usuarios'));

    }

    listen(){
       this.app.listen(this.port, () => {
            console.log(`aplicacion esta escuchando en el puerto https//localhost:${this.port}`)
          })
          
    }
}

module.exports = Server;