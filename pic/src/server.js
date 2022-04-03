let app = require("./index")

let connect = require("./configs/db")

app.listen(3000,async()=>{
    try{
        await connect()
        console.log("this is port 3000")
    }
    catch(err){
        console.log(err.message)
    }
}); 