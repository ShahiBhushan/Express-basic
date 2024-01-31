const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.json());
//read
app.get("/", (req, res) => {
  //logic=>db
  res.json({ msg: "all blog List" });
});
//creat
app.post("/", (req, res) => {
  const data = req.body;
  //logic=>send this data to db
  res.json({ msg: `new blog added data:${data}` });
});
//update
app.put("/id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  //logic=>send params with this data to db
  res.json({ msg: `Blog ID ${id} put with data` });
});
//update
app.patch("/id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  //logic=>send params with this data to db
  res.json({ msg: `Blog ID ${id} put with data` });
});
//delete
app.put("/id", (req, res) => {
  const { id } = req.params;

  res.json({ msg: `Blog ID ${id} delete` });
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}.Url is http://localhost:${PORT}`);
});
//data sending mechanism(FE to BF)
//PARAMS /:id
//BODY
//HEADER
