const UserModel = require("../../models/AuthModels/User");

class UserController{

    static getUser=async (req,res)=>{
        // get ths token user
        let tokenUser=req.user;
       try{
        let User=await UserModel.findOne({Email:tokenUser.Email});
        if(User){
            res.json({authorization:true,user:User,somethingwrong:false})
        }else{
            res.json({authorization:false,user:null,somethingwrong:false})
        }
       }catch(error){
        res.json({authorization:false,user:null,somethingwrong:true})
       }
    }
}

module.exports=UserController;