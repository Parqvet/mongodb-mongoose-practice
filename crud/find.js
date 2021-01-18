require('../connectDB');

const Product = require('../models/Product');

async function main() {
    // buscar todos los productos en la db
    // una vez que termina de hacer la consulta este me va a devolver todos los productos
    const products = await Product.find();
    console.log(products);
}

main()