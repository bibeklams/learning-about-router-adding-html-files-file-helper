const express=require("express");
const app=express();
const rootDir=require("./utils/pathUtil");
const path =require("path");
const hostRouter=require("./router/hostRouter")
const userRouter=require("./router/userRouter")
app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
})
app.use(express.urlencoded());
app.use("/host",hostRouter);
app.use(userRouter);

app.use((req,res,next)=>{
 res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})
const port=3001;
app.listen(port,()=>{
  console.log(`sever connected to localhost:${port}`);
});