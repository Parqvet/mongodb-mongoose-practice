// requerir la conexion
require('./connectDB');

// requerir el modelo de datos
const Product = require('./models/Product');

// definir un producto para empezar a guardarlo en la db
const product = new Product({
    name: 'laptop',
    description: 'lenovo thinkpad x1 carbon 6th generation',
    price: 1300.99
})

// guardar el producto en la db con el metodo save el cual es asincrono
// el mismo me puede devolver un error o el documento que se ha guardado
product.save((err, document) => {
    //
    if (err) console.log(err);
    console.log(document);
})

// console.log(product);