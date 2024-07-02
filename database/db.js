const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/task-manager';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
    .connect(mongoURI, options)
    .then(() => {
        console.log('connected to db');
    })
    .catch((error) => {
        console.error('error connectind to db', error)
    })