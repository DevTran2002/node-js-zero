const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()
const port = process.env.PORT

//config template engine
app.set('views' , path.join(__dirname , 'views'))
app.set('view engine', 'ejs')
//config static files
app.use(express.static(path.join(__dirname , 'public')))
//khai báo route
app.get('/', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


