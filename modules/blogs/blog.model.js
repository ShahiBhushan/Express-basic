/* 
1. Import mongoose
2. schema
3. write down properties from  object (schema)
4. create model from schema
*/
//const mongoose=require("mongoose");
//const {schema}=mongooge; or
const { Schema,model}=require("mongoose");
const blogSchema=new Schema({
    //how to make sure that title is not empty? 
    title:{type:String, required:[true,"titlr is missing"]},
    tags:[{type:String}],//["science","mern-stack"]
    content:{type:String},
    author:{type:String},
    status:{type:String, enum:["published","draft"],default:"draft"},//["published","draft"]
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
});


module.exports=new model("Blog",blogSchema);