const express = require("express");
const app = express();

require("dotenv").config();
let port = process.env.PORT;
let host = process.env.HOST;

app.use(express.json());  //handel all the incoming request looking  to say if there is json and convert it to object

app.listen(port,host,(err)=> {
   if (err) {
       console.log('there is a problem',err);
       return;
   }
   console.log(`server is lisiting ${host}:${port}`); // I have to use backticket
});
