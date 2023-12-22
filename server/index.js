const express = require("express")
 const app = express()


const cors = require("cors")
app.use(cors())


app.get('/getProjects',(req,res)=>{
    const data = [
        {image:"",about:""},
        {image:"",about:""},
        {image:"",about:""},
        {image:"",about:""},
        {image:"",about:""},
        {image:"",about:""}
    ]
    
    try {
    res.json({success:true,message:"success",data:data})
    } catch (error) {
        res.json({success:false,message:error.message})
    }}
)

const PORT = 4000
 app.listen(PORT,()=>{
    console.log("listning----")
 })