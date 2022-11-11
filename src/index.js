const handlebars=  require('express-handlebars');
const express = require('express')
const path= require('path')
const app = express()
const port = 3000
const morgan = require('morgan')
app.use(morgan('combined'))
//template engine
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views',path.join(__dirname,'resources\\views'))
app.get('/', (req, res) => {
  res.render('home')
})
//127.0.0.1
app.listen(port, () => {
  console.log(`Example hehe listening on port ${port}`)
})
 