const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Oinatz',
  password: 'admin',
  port: 5433,
  
})



const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getPost = (request, response) => {
    pool.query('SELECT * FROM post', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getPostById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM post WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { name, email } = request.body
    console.log(name,email)
    pool.query('INSERT INTO users(name, email) VALUES($1, $2)', [name, email], (error, results) => {
     
      response.status(201).send(`User added `)
    })
  }


  const createPost = (request, response) => {
    const { titulo, contenido, video } = request.body
    console.log(titulo, contenido, video)
    pool.query('INSERT INTO POST(titulo, contenido, video) VALUES($1, $2,$3)', [ titulo, contenido, video ], (error, results) => {
     
      response.status(201).send(`Post Created`)
    })
  }
  const createComment = (request, response) => {
    const { idUsuario, idPost, comentario } = request.body
    console.log(idUsuario, idPost, comentario)
    pool.query('INSERT INTO comentarios(id_usuario, id_post, comentario) VALUES($1, $2,$3)', [ idUsuario, idPost, comentario ], (error, results) => {
     
      response.status(201).send(`Comment Created`)
    })
  }

  const getCommentsbyId = (request, response) => {
    const id = parseInt(request.params.id)
    console.log(id)
    pool.query('SELECT * FROM comentarios WHERE id_post = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  // function createUser(req, res, next) {
  //   req.body.age = parseInt(req.body.age);
  //   db.none('insert into users(name, email) values(${name}, ${email}',
  //     req.body)
  //     .then(function () {
  //       res.status(200)
  //         .json({
  //           status: 'success',
  //           message: 'Inserted one user'
  //         });
  //     })
  //     .catch(function (err) {
  //       return next(err);
  //     });
  // }


  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send('User modified with ID:' ,{id})
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send('User deleted with ID:' ,{id})
    })
  }


  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getPost,
    createPost,
    getPostById,
    createComment,
    getCommentsbyId,
  }