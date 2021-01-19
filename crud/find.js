require('../connectDB');

const Product = require('../models/Product');

async function main() {
    // buscar todos los productos en la db: find()
    // para buscar todos los productos que son del mismo tipo le pasamos como parametro a que tipo o nombre pertenece
    // una vez que termina de hacer la consulta este me va a devolver todos los productos
    const products = await Product.find({name: 'keyboard'});
    console.log(products);
}

main()