// ejemplo para ver que un dato sea unico

require('./connectDB');

const User = require('./models/User');

async function createUser() {
    // si intento guardar otro usuario con el mismo username nos devuelve un error
    const userOne = new User({
        username: 'parqvet',
        password: '12345'
    });
    await userOne.save();

    /* const userTwo = new User({
        username: 'parqvet',
        password: 'pass'
    });
    await userTwo.save(); */
}

createUser();