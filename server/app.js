const express=require("express")
const cors=require("cors");
const dotenv=require("dotenv")
const AuthRoutes=require("./routes/AuthRouting/AuthRoutes.js")
const UserRoutes=require("./routes/UserRoutings/UserRoutes.js")
const mongodbConnection=require("./db/config.js")

// config the dotenv
dotenv.config();
// create react app
const app=express();
mongodbConnection();
// set application middlewares
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// add routing prefix
app.get("/test",(req,res)=>res.send("success"))
app.use("/miraigate",AuthRoutes);
app.use("/miraigate/user",UserRoutes)


// define port
const PORT=process.env.PORT||8000;


app.listen(PORT,()=>{
  console.log(`app is running on port ${PORT}`)
})