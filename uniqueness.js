// ejemplo para ver que un dato sea unico

require('./connectDB');

const User = require('./models/User');

async function createUser() {
    // si intento guardar otro usuario con el mismo username nos devuelve un error
    const userOne = new User({
        username: 'elpepe',
        password: '12345'
    });
    await userOne.save();

    const userTwo = new User({
        username: 'juani',
        password: 'pass'
    });
    await userTwo.save();
}

createUser();