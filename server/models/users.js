import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        
    },
    password:{
        type:String,
    }
})

const userModel = mongoose.model("users",userSchema)
export default userModel