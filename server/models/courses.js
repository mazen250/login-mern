import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    title:{
        type:String
    },
    category:{
        type:String
    },
    attendance:{
        type:Array,
        default:[]
    },
    numberOfAttendance:{
        type:Number,
        default:0
    }
})

export const courseModel =mongoose.model("courses",courseSchema) 