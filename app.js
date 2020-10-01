const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");
const hostname = 'localhost';
const port = 8080;

const app = express();
//

app.use(bp.json())
app.use(bp.urlencoded({extended:false}))

// setup database
mongoose.connect("YOUR MONGODB URI",
{useNewUrlParser:true})

// error handling
mongoose.connection.once("connected", ()=>{
    console.log("connected!")
}).on("error", ()=>{
    console.log("Error connecting")
})


app.use("/", require("./controller/router"))

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
