const mongoose=require('mongoose');
const messageSchema=mongoose.Schema(
    {
        fullname:{
            required:true,
            type:String,
        },
        email:
        {
           required:true,
           type:String,
        },
        message:
        {
         required:true,
         type:String,
        }
    }
)

const Message=mongoose.model('message',messageSchema);

module.exports=Message;
