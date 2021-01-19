require('../connectDB');

const User = require('../models/User');

async function getUser() {
    // buscar a un solo usuario
    const user = await User.findOne({username: 'parqvet'});
    console.log(user);
}

getUser();