// la funcion model es quien nos va a permitir interactuar con la db
const { Schema, model } = require('mongoose');

// instanciar una nueva clase
const productSchema = new Schema({
    // escribir las propiedades que queremos que tenga nuestro producto y el tipo de dato
    // al ponerlo en un objeto se puede definir mas tipo de datos
    name: {
        type: String
    },
    description: String,
    price: {
        type: Number,
        // si no se pasa ningun precio por default sera cero
        default: 0
    }
})

// crear un modelo a partir del esquema
// para utilizarlo en otras partes de la app lo exportamos
module.exports = model('Product', productSchema);