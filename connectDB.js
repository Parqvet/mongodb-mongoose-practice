const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/mywebstore';
const db = mongoose.connection;

// connect to db
// modulo de mongoose que me permite conectarme a una instancia de mongodb
// como parametro recibe la direccion de donde esta la db y el nombre de la base de datos a la cual nos vamos a conectar
// como segundo parametro se agrega un objeto con algunas configuraciones para que no nos tire mensajes de advertencia
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .catch(err => console.log(err));

// eventos para ver por consola cuando se da la conexion
// para escuchar una sola vez al evento usamos once
db.once('open', _ => {
    console.log('Database is connected to', uri);
})

// para escuchar los errores
db.on('error', err => {
    console.log(err);
})