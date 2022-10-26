const express = require('express')
const app = express()
const courses = require('./Data/courses.json')
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) =>{
  res.send('done')
})
app.get('/courses', (req, res) =>{
  res.send(require('./Data/courses.json'))
})







app.listen(port, () =>{
  console.log(`port is ${port}`);
})