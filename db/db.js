const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', ()=>{
    console.log(`Mongoose connected to: ${connectionString}`);
});
mongoose.connection.on('err', (err)=>{
    console.log(`Mongoose error: ${err}`);
});
mongoose.connection.on('disconnected', ()=>{
    console.log(`Mongoose disconnected to: ${connectionString}`);
});