require("dotenv").config();
const http = require("http");

const app = require("./index");

const server = http.createServer(app);

app.get("/",(req,res)=>{
    res.send("Hello");
})
server.listen("https://shopmanager.onrender.com/");
