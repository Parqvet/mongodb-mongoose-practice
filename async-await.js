require('./connectDB');

const Product = require('./models/Product');

// guardar un producto sin usar callback
async function main() {
    const product = new Product({
        name: 'keyboard',
        description: 'Coursair k68 RGB Gaming keyboard',
        price: 150
    })
    
    const productSaved = await product.save();
    return productSaved
}

// una vez termine de ejecutarse main, me va a retornar el producto guardado
main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err))