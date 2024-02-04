const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({ msg: "hello from blog router" });
});
const mw=(req,res,next)=>{
  req.body.country="Nepal";
    next();
};
//try and catch
// router.post("/", (req, res, next) => {
//   try {
//    // StyleSheetList;
//     res.json({ msg: "hello from blog  post router" });
//   } catch (err) {
//     next(err);
//   }
// });
//or throw error
router.post("/", mw,(req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) throw new Error("Title is missing");
    console.log(req.body); //for middleware
    res.json({ msg: "hello from blog  post router" });
  } catch (err) {
    next(err);
  }
});
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

router.put("/:id", (req, res) => {
  res.json({ msg: "hello from blog put router" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "hello from blog  patch router" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "hello from blog  deleterouter" });
});

module.exports = router;
