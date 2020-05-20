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
app.use(bodyParser.json({limit: '50mb'}))

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
app.get('/galeria', db.getGaleria)
app.get('/users/:id', db.getUserById)
app.get('/post/:id', db.getPostById)
app.get('/comment/:id', db.getCommentsbyId)
app.put('/login', db.getloggedUser)
app.post('/users', db.createUser)
app.post('/post', db.createPost)
app.post('/galeria', db.saveImage)
app.post('/comment', db.createComment)
app.put('/post/:id', db.updatePost)
app.delete('/post/:id', db.deletePost)

app.listen(port, () => {
  console.log('App running on port',{port})
  
})