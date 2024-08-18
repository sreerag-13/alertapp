const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
let app=express()
app.use(cors())
app.use(express.json())

app.post("/sign",async(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(req.body.Password,10)
    console.log(hashedpassword)
    req.body.Password=hashedpassword
   blogmodel.find({Email:req.body.Email}).then((items)=>{
        console.log(items)
     if(items.length>0){
        res.json({"status":"email is already exit"})
     }
     else{
        let result=new blogmodel(input)
        result.save()
        res.json({"status":"success done"})
     }
    
}
).catch((error)=>{})
    
})

app.post("/signin",(req,res)=>{
    let input=req.body
    blogmodel.find({"Email":req.body.Email}).then((response)=>{
      if(response.length>0)
        {
           const dpassword=bcrypt.compareSync(input.Password,response[0].Password)
            if(dpassword)
                {
                    jwt.sign({Email:input.Email},"blogApp",{expiresIn:"1d"},(error,token)=>{
                        if(error)
                        {
                            res.json({"status":"eroor","errorMessage":error}) 
                        }
                        else{
                            res.json({"status":"success","token":token,"userid":response[0]._id})
                        }
                    })
                   
                }
                else{
                    res.json({"status":"incorrect password"})
                }
            }
        else{
            res.json({"status":"incorrect email"})
        }
    }
    )
    .catch()
    }
    )
    
    


   
app.listen("8080",()=>{
    console.log("server start")
})
