const express = require("express");
const mongoose = require("mongoose");
//permite trabajar con la variable de entorno creada por uno mismo
require("dotenv").config();

const app = express();

/*process.env.PORT, es una variable de ambiente, para que al subir el proyecto a un hosting, se
 asigne esa puerto automaticamente
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server listening on localhost:"+PORT);
});

//MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
        .then(()=>console.log("Connected to MongoDB Atlas"))
        .catch((error)=>console.log("Error"+ error));

//routes
app.get("/", (req,res)=>{
    res.send("Welcome to my API");
});