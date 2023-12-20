const express = require('express')
const app = express()
const port = 3000



app.get('/',(req,res) =>{
  res.redirect("/scissors")
})

app.get('/scissors',(req,res)=>{
  res.send('helld wolrd')
})


app.listen(port,()=>{
  console.log(`server is started http://localhost:${port} `)
})