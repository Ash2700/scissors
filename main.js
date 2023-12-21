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
//get link v

//tans to short v
//save data???
//send back data
app.get('/shortlink', (req,res) => {
  const inputURL = req.query.inputURL
  const randSting = getRandWord()
})

function getRandWord(){
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result =''
  for(let i=0 ; i < 5 ; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}


app.listen(port,()=>{
  console.log(`server is started http://localhost:${port} `)
})