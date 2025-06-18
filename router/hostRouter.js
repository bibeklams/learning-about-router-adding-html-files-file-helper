const express=require("express");
const hostRouter=express.Router();
const path = require("path");
const rootDir=require("../utils/pathUtil");

hostRouter.get("/add-home",(req,res)=>{
  console.log(req.url,req.method);
   res.sendFile(path.join(rootDir, 'views', 'add-home.html'));
});
hostRouter.post("/add-home",(req,res)=>{
  const {name,email}=req.body;
   res.sendFile(path.join(rootDir, 'views', 'home-added.html'));
})
module.exports=hostRouter;