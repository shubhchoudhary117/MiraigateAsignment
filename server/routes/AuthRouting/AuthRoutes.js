const express=require("express");
const AuthController = require("../../Controllers/AuthControllers/AuthController");

const router=express.Router();


router.post("/signup",AuthController.RegisetrUser);
router.post("/login",AuthController.UserLogin)
router.post("/forgot/email",AuthController.SendEMail)
router.post("/change-password",AuthController.UpdateUserPassword)
module.exports=router;