const router = require("express").Router();
const blogController = require("./blog.controller");
const {validate}= require("./blog.validator");

router.get("/", validate,async (req, res, next) => {
  try {
    const result = await blogController.getAll();
    res.json({ data: result });
  } catch (e) {
    next(e);
  }
});
router.get("/:id", validate,async (req, res, next) => {
  try {
    const result = await blogController.getById();
    res.json({ data:result});
  } catch (e) {
    next(e);
  }
});


router.post("/:id", validate,async(req, res,next) => {
try{
  const data =req.body;
  const result=await blogController.create(data);
  res.json({ data:result });}
  catch(e){
    next(e);
  }
});


// router.patch("/:id", (req, res) => {
//   res.json({ msg: "hello from blog  patch router" });
// });

// router.delete("/:id", (req, res) => {
//   res.json({ msg: "hello from blog  deleterouter" });
// });
// const mw = (req, res, next) => {
//   req.body.country = "Nepal";
//   next();
// };
// //try and catch
// // router.post("/", (req, res, next) => {
// //   try {
// //    // StyleSheetList;
// //     res.json({ msg: "hello from blog  post router" });
// //   } catch (err) {
// //     next(err);
// //   }
// // });
// //or throw error
// router.post("/", mw,async(req, res, next) => {
//   try {
//     const { title } = req.body;
//     if (!title) throw new Error("Title is missing");
//     console.log(req.body); //for middleware
//     res.json({ msg: "hello from blog  post router" });
//   } catch (err) {
//     next(err);
//   }
// });
//finally
//  router.post("/", (req, res, next) => {
//     let counter=0;
//     try {
//         const {title}=req.body;
//          if (!title)throw new error("Title is missing");
//          res.json({ msg: "hello from blog  post router" });
//        } catch (err) {
//          next(err);
//        }
//        finally{counter ++;
//     console.log({counter});
//     }
//      });
module.exports = router;
