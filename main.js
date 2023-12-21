const express = require('express')
const app = express()
const port = 3000
const {engine} = require('express-handlebars')
const fs = require('fs')
let data = loadData()

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
//save data??? v
// check rep date??/
//send back data
app.get('/shortlink', (req,res) => {
  const inputURL = req.query.inputURL
  const originShort = takeBackShortlink(inputURL).shortURL
  const randSting = isRepeat(inputURL) ? originShort : getRandWord()
  console.log(randSting)
  if(!isRepeat(inputURL)){
    saveData(inputURL,randSting)
  }
  res.render('return',{shortlink:`www.scissors.com/${randSting}`})
})

app.get('/www.scissors.com/*',(req,res)=>{
  res.send(req.path)
 console.log(req.params[0])
})
function takeBackShortlink(string){
  if(isRepeat(string)){
    const result = data.find((item) =>{ return  Object.values(item).includes(string)})
  return result
  }
  return ''
}
function isRepeat(string){
  const result = data.some((item)=>Object.values(item).includes(string) )
  return result
}

function getRandWord(){
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result =''
  for(let i=0 ; i < 5 ; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function saveData(inputURL,randSting){
  data.push({inputURL, shortURL:`${randSting}`})
  fs.writeFileSync('./public/jsons/data.json',JSON.stringify(data,null,2))
}

function loadData(){
  try{
    const jsonData = fs.readFileSync('./public/jsons/data.json','utf8')
    return JSON.parse(jsonData) || []
  }catch(error){
    console.error('讀取資料錯誤',error.message)
    return []
  }
}

app.listen(port,()=>{
  console.log(`server is started http://localhost:${port} `)
})