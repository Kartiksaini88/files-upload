let mongoose = require("mongoose")


let userSchema = mongoose.Schema(
    {
        firstName:{type:String,required:true},
        profilepic:[{type:String,required:false}],
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

module.exports = mongoose.model("user",userSchema)