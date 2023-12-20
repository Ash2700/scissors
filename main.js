const express = require('express')
const app = express()
const port = 3000
const {engine} = require('express-handlebars')


app.use(express.static('public'))
app.engine('.hbs',engine({extname:'.hbs'}))
app.set('view engine', '.hbs')
app.set('views','./views')


app.get('/',(req,res) =>{
  res.redirect("/scissors")
})

app.get('/scissors',(req,res)=>{
  res.render('index')
})


app.listen(port,()=>{
  console.log(`server is started http://localhost:${port} `)
})