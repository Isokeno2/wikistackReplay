const express = require("express");
const morgan = require("morgan");
const app = express();
const layout = require("./views/layout");


app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extened: false }));

app.get("/", (req, res,next) =>{
  try{
    res.send(layout(""))
  } catch(err){
    next(err)
  }
});

// app.use( "/", (err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something Broke!")
// })

const PORT = 3000;


  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });





