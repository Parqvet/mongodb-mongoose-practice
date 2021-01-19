require('../connectDB');

const User = require('../models/User');

const someFunction = async () => {
    // buscar al usuario
    const user = await User.findOne({username: 'juan'});
    console.log(user);
    // otra forma de cambiar la contraseña
    user.password = 'nuevapass';
    user.save();
}

// ejemplo usando findeOneAndUpdate
const findAndUpdate = async () => {
    const user = await User.findOneAndUpdate({username: 'clark'}, {
        name: 'marce'
    }, {new: true});
    // para que nos devuelva el dato actualizado usamos new en true
    console.log(user);
}

async function updateUsers() {
    // para actualizar usamos el metodo update, el cual recibe dos propiedades
    // un objeto para especificar que datos vamos a buscar y luego la propiedad que queramos cambiar
    const user = await User.update({username: 'pepe'}, {
        // por ejemplo para cambiar el password
        password: 'contraseña'
    });

    console.log(user);
}

findAndUpdate();