require('../connectDB');

const Product = require('../models/Product');

const deleteFunction = async () => {
    // buscar y eliminar
    // deleteMany elimina varios del mismo producto
    // const result = await Product.deleteMany({name: 'keyboard'});

    // deleteOne busca todos los datos y elimina uno
    // const result = await Product.deleteOne({name: 'laptop hp'});

    // buscar un solo dato y eliminarlo
    // const result = await Product.findOneAndDelete({name: 'laptop'});

    // buscar un dato por id para eliminarlo
    // como parametro se le pasa el id
    const result = await Product.findByIdAndDelete('6004bcd9ecc460270818da69');


    console.log(result);
}

deleteFunction();