const { Route } = require("express")
let express = require("express")

let User = require("../models/user.model")

let router = express.Router()



let {fileUploads,uploads} = require("../middlerwares/upload");


router.get("",async(req,res)=>{
    try{
     let user = await User.find().lean().exec()

     return res.status(201).send({user:user})
    }
    catch(err){
    return res.status(500).send({err:err.message})
    }
})

router.post("",uploads.single("profilepic"),async(req,res)=>{
    try{
     let user = await User.create({
         firstName:req.body.firstName,
         profilepic:req.file.path
     })

     return res.status(201).send({user:user})
    }
    catch(err){
    return res.status(500).send({err:err.message})
    }
})

router.post("/multiple",uploads.any("profilepic"),async(req,res)=>{
    try{
     let filepath = req.files.map((file)=>{
         return file.path
     })

     let user = await User.create({
         firstName:req.body.firstName,
         profilepic:filepath
     })

     return res.status(201).send({user:user})
    }
    catch(err){
    return res.status(500).send({err:err.message})
    }
})

// router.post("",fileUploads("profilepic","single"),async (req, res)=>{
//     try{
//         let user = await User.create({
//             firstName:req.body.firstName,
//             profilepic:req.file.path
//         })
   
//         return res.status(201).send({user:user})
//        }
//        catch(err){
//        return res.status(500).send({err:err.message})
//        }
// })



// router.post("/multiple",fileUploads("profilepic","multiple"),async (req, res)=>{
//     try{
//         let file_path = req.files.map((file)=>{
//             return file.path
//         })
   
//         let user = await User.create({
//             firstName:req.body.firstName,
//             profilepic:file_path
//         })
   
//         return res.status(201).send({user:user})
//        }
//        catch(err){
//        return res.status(500).send({err:err.message})
//        }
// })


module.exports = router