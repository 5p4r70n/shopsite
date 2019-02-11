var mongoose=require("mongoose")
var Schema=mongoose.Schema
var BookSchema=new Schema({
    itemid:{type:String},
    itemname:{type:String},
    itemtype:{type:String},
    itemseller:{type:String},
    itempicid:{type:String}
})
module.exports=mongoose.model("shop",BookSchema)