const blogModel=require("./blog.model");
//create
const create=(payload)=>{
return blogModel.create(payload);
};
//read
const getAll=()=>{
    return blogModel.find();
};
//read
const getById=(_id)=>{
return blogModel.findOne({_id});//{_id:_id}
};
//update
const updateById=(_id,payload)=>{
return blogModel.updateOne({_id},payload);//{_id:1,author:"bhushan"}
};
//delete
const deleteById=(_id)=>{
return blogModel.deteleOne({_id});
};

module.exports={create,getAll,getById,updateById,deleteById};