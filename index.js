const express=require("express")
const cors=require("cors")


// routes
const authRoutes=require("./routes/auth.js")

require("dotenv").config()

const app=express()
const PORT= process.env.PORT || 5000


// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use("/auth",authRoutes)

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(PORT,()=>{
    console.log(`listen to  ${PORT}`);
})