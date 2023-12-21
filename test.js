const data = require('./public/jsons/data.json')

console.log(data)

data.forEach((item)=>{console.log(item)})

const item = data.find((item) => {return Object.values(item).includes('Y13F6')  }).inputURL
console.log(item)