const express = require("express");
const indexRouter=require("./routes");
const app = express();
const PORT = 8000;
app.use(express.json());
app.use("/",indexRouter);
app.listen(PORT,()=> {console.log(`app is running on port ${PORT}.Url is http://localhost:${PORT}`);
});
//data sending mechanism(FE to BF)
//PARAMS /:id
//BODY
//HEADER
