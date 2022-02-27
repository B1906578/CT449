const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


//app.use(express.urlencoded({extended:true}));
app.get("/",(req, res) => {
    res.json({message:"Welcome to contact book application."});
});
const setupContactRoutes = require("./app/routes/contact.routes");
   

setupContactRoutes(app);
module.exports =app;