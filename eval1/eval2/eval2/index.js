const { json } = require("express");
const fs=require("fs")
const morgan=require("morgan");
const validator=require("./Middlewares/validator")
const express=require("express");
let app=express()
app.use(json());
app.use(morgan(function(tokens,req,res){
    const [x,y]=[tokens.method(res,res),tokens.url(req,res)];
    const logs=fs.appendFileSync("./logs.text",`\n ${x} ${y}`)
    return logs
}))
app.get("/students",(req,res)=>{
    let data=fs.readFileSync("./db.json","utf-8");
    data=JSON.parse(data)

    console.log(data)
    res.send(`\n data all students is successfully added`)
})
app.get("/students/:rollNo",(req,res)=>{
    let data=fs.readFileSync("./db.json","utf-8");
    const {rollNo}=req.params;
    data=JSON.parse(data)
    console.log(rollNo)
    const x=data.students.filter((el)=>(el.roll_no===rollNo))
res.send(`${x}your student data is here`)
})
app.get("/teachers",(req,res)=>{
    let data=fs.readFileSync("./db.json","utf-8");
    data=JSON.parse(data)
    console.log(data)
    res.send(`\n data all teachers is successfully added`)
})
app.get("/teachers/:empID",(req,res)=>{
    let data=fs.readFileSync("./db.json","utf-8");
    const {empID}=req.params;
    data=JSON.parse(data)
    console.log(empID)
    const x=data.teachers.filter((el)=>(el.emp_id===empID))
res.send(`${x}your teachers data is here`)
})
app.patch("/students/:rollNo",validator,(req,res)=>{
    const {rollNo}=req.params;
    const patchdata=req.body.course;
    let data=fs.readFileSync("./db.json","utf-8");
   
    console.log(patchdata)
    let parsedata=JSON.parse(data)
 let x= parsedata.students.filter((el)=>{
    if(el.roll_no===rollNo){
      el.course=patchdata

    }
    
})
    
    data.students=x;
 const newdata=JSON.stringify(newdata)
    console.log(newdata,patchdata);
   
    fs.writeFileSync("./db.json",newdata)
    
res.send(`your student updated data is here`)
})
app.delete("/students/:rollNo",validator,(req,res)=>{
    const {rollNo}=req.params;
    const patchdata=req.body.course;
    let data=fs.readFileSync("./db.json","utf-8");
   
    console.log(patchdata)
    let parsedata=JSON.parse(data)
 let x= parsedata.students.filter((el)=>(el.roll_no!==rollNo))
    
    
 const newdata=JSON.stringify(x)
    console.log(newdata,patchdata);
   data.students=newdata
    fs.writeFileSync("./db.json",data)
res.send(`your student deleted data is here`)
})
app.post("/students/addstudent",(req,res)=>{
    const post=req.body;
    let data=fs.readFileSync("./db.json","utf-8");
   
    // console.log(patchdata)
    let parsedata=JSON.parse(data)
    parsedata.students.push(post);
    const newdata=JSON.stringify(parsedata)
    fs.writeFileSync("./db.json",newdata)
res.send(`your student addedd data is here`)
})
app.post("/teachers/addteacher",(req,res)=>{
    const post=req.body;
    let data=fs.readFileSync("./db.json","utf-8");
   
    // console.log(patchdata)
    let parsedata=JSON.parse(data)
    parsedata.teachers.push(post);
    const newdata=JSON.stringify(parsedata)
    fs.writeFileSync("./db.json",newdata)
res.send(`your teacher addedd data is here`)
})

app.listen(3004,()=>{
    console.log("server is running in port 3004")
})