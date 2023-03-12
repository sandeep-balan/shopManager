const express = require("express");
const connection = require("./connection");
const cors = require("cors");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");
const billRoute = require("./routes/bill");
const dashboardRoute = require("./routes/dashboard");

const app = express();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("https://shopmanager.onrender.com/user", userRoute);
app.use("https://shopmanager.onrender.com/category", categoryRoute);
app.use("https://shopmanager.onrender.com/product", productRoute);
app.use("https://shopmanager.onrender.com/bill", billRoute);
app.use("https://shopmanager.onrender.com/dashboard", dashboardRoute);
app.get("/",(req,res)=>{
  res.send("hello");
})
module.exports = app;
