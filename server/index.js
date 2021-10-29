const express = require("express");
const app = express();
app.use(express.json());
const db = require("./models");
const cars = require("./routes/Cars"); // here it's  make the cars variabel as a router object
const users = require("./routes/Users");


// app.use(sup);
app.use("/Cars",cars);  
// use the Cars.js file to handle 
// endpoint that start with /Cars

app.use("/Users",users);  

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});