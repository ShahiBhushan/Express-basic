require("dotenv").config();
const express = require("express");
const indexRouter=require("./routes");
const morgan=require("morgan");//loger

const app = express();
const PORT=Number(process.env.PORT);

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
