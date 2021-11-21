const mongoose =require('mongoose');
const database ="tiendamascotas1";
const password ="admin";
const URI = 'mongodb+srv://admin_mongo:'+password+'@cluster0.4zig8.mongodb.net/'+tiendamascotas1+'?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log("Atlas en linea"))
    .catch(err => console.err(err))

module.exports = mongoose;