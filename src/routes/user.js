const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

//create user
router.post("/users",(req,res)=>{
    //crear el usuario en base al esquema y el cuerpo del request
    const user = userSchema(req.body);
    //guardando en la base de datos
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});



module.exports = router;