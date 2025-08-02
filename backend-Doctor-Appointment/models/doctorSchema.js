import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    name:
    {
          type:String,
          required:[true,"please enter your name"]
    },
     email:
    {
          type:String,
          required:[true,"please enter your email"],
    },
    specialization:
    {
        type:String,
        required:[true,"please enter your specialization"],
    },
    contact :
    {
        type:Number,
        required:[true,"please enter your phone number"],
    }
},
    {timestamps:true}
);

export const Doctor=mongoose.model("Doctor",doctorSchema);