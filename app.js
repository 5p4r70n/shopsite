var express=require("express")
const app=express()
var bodyparser=require("body-parser")
app.set("view engine","ejs")
var mongoose=require("mongoose")
const fileUpload=require("express-fileupload")
app.use(fileUpload())
app.use(bodyparser.urlencoded({extended:false}))
const CONNECTION_URI=process.env.MONGODB_URI || 'mongodb://localhost/shopping'
mangoose.Promise=global.Promise;
mongoose.set('debug',true)
mongoose.connect(CONNECTION_URI,function(err)
{console.log(err)})
const PORT = process.env.PORT || 3000;
var shop=require("./model/shop.js")
var path = require('path')
app.use('*/images',express.static('public/images'));
app.get("/",function(req,res){
    shop.find({},function(err,result){
        if(err)
        {
            res.send("Error")
        }
        else{
            res.render("home",{data:result})
        }
     
        
    })
}
)

app.get("/home/add",function(req,res){
    res.render("add")
}
)

app.post("/home/add/insert",function(req,res)
{
shop.find({},function(err,result){
    if(err)
    {
        res.send("Error")
    }
    else {
    var y=result.length
    console.log(y)
    var b1=new shop()
    var id = ("pr" + (1 + y))
    console.log(id)
    b1.itemid=id
    b1.itemname=req.body.itemname
    b1.itemtype=req.body.itemtype
    b1.itemseller=req.body.itemseller
    let samplefile=req.files.itempic
    let ext =path.extname(samplefile.name)
        console.log(ext)
    samplefile.mv(__dirname+"/public/images/"+ id + ext,function(err,result)
    {
        if(err)
        {res.send(err)}
        else{
            console.log("file Uploaded")

        }
    })
    b1.itempicid= (id+ext)
    console.log(id+ext)
    b1.save(function(err,result)
    {
        if(err){res.send(err)}
        else{res.send("<center><h1><b>data inserted</b></h1></center>")}
    })

    }

}
)
   
})
app.get("/home/update",function(req,res)
{
    res.render("update")
})
app.post("/home/update/newvalues",function(req,res){
    shop.findOne({"itemid":req.body.itemid},function(err,result)
    {
        if(err)
        {
            res.send(err)
        }
        else{
            console.log(req.body.itemname,
                req.body.itemtype,
               req.body.itemseller)
            result.itemname=req.body.itemname
            result.itemtype=req.body.itemtype
            result.itemseller=req.body.itemseller
        
            result.save(function(err,result2)
            {
                if(err)
                {
                    res.send(err)
                }
                else{
                    res.send("Updated <br> <a href='/'>Home</a>")
                }
            })
        }
    
    })
    })
app.get("/home/delete",function(req,res)
{
    res.render("delete")
})
    
app.post("/home/delete/del",function(req,res)
{
    console.log(req.body.itemid)
    shop.deleteOne({"itemid":req.body.itemid},function(err){
        if(err){res.send(err)}else{
            res.send("deleted <br> <a href='/'>Home</a>")
        }
    })
})
app.get("/home/view",function(req,res){
    shop.find({},function(err,result){
        if(err)
        {
            res.send("Error")
        }
        else{
            res.render("view",{data:result})
        }
     
        
    })
}
)
app.listen(port,function(req,res)
{
    console.log("server started ${PORT}" )
})