let express= require("express");

let userControllers = require("./controllers/user.controller")

let app = express()

app.use(express.json())

app.use("/user",userControllers)

module.exports = app