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

//get all users
router.get("/users",(req,res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//get one users
router.get("/users/:id",(req,res)=>{
    const id = req.params.id;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//put one users
router.put("/users/:id",(req,res)=>{
    const id = req.params.id;
    const {name, age, email } = req.body;
    userSchema
    .updateOne({_id:id, }, {name, age, email })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//put one users
router.delete("/users/:id",(req,res)=>{
    const id = req.params.id;
    userSchema
    .deleteOne({_id:id, })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

module.exports = router;