// var express=require("express")
// const app=express()
// var bodyparser=require("body-parser")
// app.set("view engine","ejs")
// var mongoose=require("mongoose")
// const fileUpload=require("express-fileupload")
// app.use(fileUpload())
// app.use(bodyparser.urlencoded({extended:false}))
// var db="mongodb://localhost/shopping"
// mongoose.connect(db,function(err)
// {console.log(err)})
// var shop=require("../model/shop.js")

// app.get("/add",function(req,res){
//     res.render("add")
// }
// )
// app.post("/add/insert",function(req,res)
// {
//     let samplefile=req.files.itempic
//     samplefile.mv(__dirname+"/images/"+samplefile.name,function(err,result)
//     {
//         if(err)
//         {res.send(err)}
//         else{
            
       
// shop.find({},function(err,result){
//     if(err)
//     {
//         res.send("Error")
//     }
//     else {
//     var y=result.length
//     console.log(y)
//     var b1=new shop()
//     b1.itemid=("pr" + (1 + y))
//     b1.itemname=req.body.itemname
//     b1.itemtype=req.body.itemtype
//     b1.itemseller=req.body.itemseller
//     //b1.itempicid= itempic.name
//     b1.save(function(err,result)
//     {
//         if(err){res.send(err)}
//         else{res.send("<center><h1><b>data inserted</b></h1></center>")}
//     })

//     }

// }
// )

// }
// })   
// })