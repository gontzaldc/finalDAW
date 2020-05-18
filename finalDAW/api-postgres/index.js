const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
const cors = require('cors');

// app.use(function(req,res,next){
//   res.header("Access-Control-Allow-Origin","*");
//   res-header("Access-Control-Allow-Headers","Origin, X-Requested-With, COntent-Type, Accept");
//   next()
// })
// bodyParser={
//   json: {limit: '50mb', extended: true},
//   urlencoded: {limit: '50mb', extended: true}
// }
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(cors());

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/post', db.getPost)
app.get('/users/:id', db.getUserById)
app.get('/post/:id', db.getPostById)
app.get('/comment/:id', db.getCommentsbyId)
app.post('/users', db.createUser)
app.post('/post', db.createPost)
app.post('/comment', db.createComment)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log('App running on port',{port})
  
})