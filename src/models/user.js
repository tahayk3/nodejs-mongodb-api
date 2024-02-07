const mongoose = require("mongoose");
//se crea un objeto(modelo de datos) con la estructura de datos de un usuario,
//es como crear una tabla para luego poder insertar los datos en la base de datos
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type: Number,
        required:true
    },
    email: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model("User",userSchema);