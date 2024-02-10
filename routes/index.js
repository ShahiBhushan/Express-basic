const router= require("express").Router();
const blogRouter=require("../modules/blogs/blog.route");

const apiVersion="/api/v1";
router.get("/", (req, res) => {
    //logic=>db
    res.json({ msg: "hello from router index" });
  });
// api should always have version (v1/v2/v3)
router.use(`${apiVersion}/blogs`,blogRouter);

module.exports=router;