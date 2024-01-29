const express=require("express");
const app=express();
const PORT=8000;
app.get("/",(req,res)=>{
    res.json({msg:"hello world"});
});
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}.Url is http://localhost:${PORT}`);
});
