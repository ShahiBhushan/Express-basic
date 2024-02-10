require("dotenv").config();
const express = require("express");
const morgan=require("morgan");//loger
const mongoose=require("mongoose");
const indexRouter=require("./routes");

const app = express();
const PORT=Number(process.env.PORT);
mongoose.connect("mongodb://localhost:27017/blog-app").then(()=>{
    console.log("Database connect");
});

app.use(express.json());
app.use(morgan("dev"));
app.use("/assets",express.static("public"));//static files
//middleware
app.use((req,res,next)=>{ 
    req.body.currency="NPR";
    next();
   
});
// app.use((req,res,next)=>{ 
//     req.body.country="Nepal";
//     next();
// });
app.use("/",indexRouter);
//error handling
app.use((err,req,res,next)=>{
err=err ? err.toString():"something went wrong";
res.status(500).json({smg:err});
});
app.listen(PORT,()=> {console.log(`app is running on port ${PORT}.Url is http://localhost:${PORT}`);
});
//data sending mechanism(FE to BF)
//PARAMS /:id
//BODY
//HEADERm
