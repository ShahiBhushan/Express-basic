const Joi=require("joi");
const Schema=Joi.object({
    title:Joi.string().required(),
    tags:[Joi.string()],

    content:Joi.string(),
    author:Joi.string(),
    status:Joi.string(),
});
const validate=(req,res,next)=>{
    const {error}=Schema.validate(req.body);
    if(error){
        res.status(400).json({msg:error.details[0].message});
    }
    else{
        next();
    }
// try{
//     const result=Schema.validaate(req.body);
//     co
// }
// catch(e){
//     next(e);
// }
};
module.exports={validate};