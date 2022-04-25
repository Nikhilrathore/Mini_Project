const mongoose= require('mongoose');
let userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    ngo_name:String,
    state:String,
});
module.exports=mongoose.model('users',userSchema);