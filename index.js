const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/student.js");
const studentRoute = require("./routes/route.js")

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//routes
app.use("/api/students" , studentRoute);

mongoose
  .connect("mongodb://localhost:27017/StudentApplication")
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("DB error");
  });
