import bodyParser from "body-parser";
import express from "express";

import cors from 'cors';
import mongoose from 'mongoose'
import userModel from './models/users.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/mern",()=>{
    console.log("connected to mongo");
})



app.post("/register",async (req,res)=>{
    let {username,password} = req.body
    
    
    let newUser = new userModel({
             username:username,
             password:password
         })
         if(newUser){
            await newUser.save()
            res.send({message:"ok" ,newUser})
         }
         else{
            res.send({message:"error"})
         }
})

app.post('/login',async (req,res)=>{
    let username = req.body.username
    let password = req.body.password
    console.log(username,password);
     userModel.findOne({username:username,password:password},(err,user)=>{
        if(err){
            res.send({err,status:404})
        }
        else if(user){
            console.log(user);
            res.send({message:"user found",user,status:200})

        }
        else{
            res.send({message:"no user found",status:401})
        }
    })
  
})



app.listen(5000,()=>{
    console.log("running on port 5000");
})