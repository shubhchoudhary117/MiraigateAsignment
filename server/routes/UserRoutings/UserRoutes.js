const express=require("express");
const UserController=require("../../Controllers/UserController/UserController.js");
const { Protect } = require("../../Middleware/Auth/Protect.js");
const router=express.Router();


router.get("/getuser",Protect,UserController.getUser)

module.exports=router;