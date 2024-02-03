const router= require("express").Router();
const blogRouter=require("../modules/blogs/blog.route");
const tagRouter=require("../modules/tags/tag.route");
const roleRouter=require("../modules/roles/role.route");
const userRouter=require("../modules/users/user.route");
const apiVersion="/api/v1";
router.get("/", (req, res) => {
    //logic=>db
    res.json({ msg: "hello from router index" });
  });
// api should always have version (v1/v2/v3)
router.use(`${apiVersion}/roles`,roleRouter);
router.use(`${apiVersion}/blogs`,blogRouter);
router.use(`${apiVersion}/tags`,tagRouter);
router.use(`${apiVersion}/users`,userRouter);
  module.exports=router;