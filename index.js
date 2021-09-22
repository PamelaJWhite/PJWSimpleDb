//connect to express
const express = require("express")
let env = require("dotenv").config("");
let app = express();

// enable the app to parse JSON bodies in post/put
app.use(express.json())

let exampleRouter = require("./example/router")
app.use(exampleRouter)

require("./example/db");

let port = process.env.PORT

app.listen(port, function(){
    console.log("Starting on port:", port)
})



