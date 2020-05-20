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
    pool.query('SELECT * FROM post where fecha_creacion>= CURRENT_DATE', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getGaleria= (request, response) => {
    pool.query('SELECT * FROM galeria', (error, results) => {
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
    const { username, password, role } = request.body
    pool.query('INSERT INTO users(username, password, role) VALUES($1, $2, $3)', [username, password, role], (error, results) => {
     
      response.status(201).send(`User added `)
    })
  }

  const saveImage = (request, response) => {
    const { image} = request.body
    pool.query('INSERT INTO galeria(image) VALUES($1)', [  image], (error, results) => {
     
      response.status(201).send(`Post Created`)
    })
  }


  const createPost = (request, response) => {
    const { titulo, contenido, video, fechaC ,fechaPublicar} = request.body
    pool.query('INSERT INTO POST(titulo, contenido, video, fecha_creacion, fecha_publicacion) VALUES($1, $2,$3,$4, $5)', [ titulo, contenido, video, fechaC , fechaPublicar], (error, results) => {
     
      response.status(201).send(`Post Created`)
    })
  }
  const createComment = (request, response) => {
    const { idUsuario, idPost, comentario, fecha, username } = request.body
    pool.query('INSERT INTO comentarios(id_usuario, id_post, comentario, fecha, username) VALUES($1, $2,$3, $4, $5)', [ idUsuario, idPost, comentario, fecha , username], (error, results) => {
     
      response.status(201).send(`Comment Created`)
    })
  }

  const getCommentsbyId = (request, response) => {
    const id = parseInt(request.params.id)
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


  const updatePost = (request, response) => {
    const id = parseInt(request.params.id)
    const { titulo, contenido } = request.body
    pool.query(
      'UPDATE post SET titulo = $1, contenido = $2 WHERE id = $3',[titulo, contenido, id],
      (error, results) => {
        if (error) {
        }
      }
    )
  }

  const deletePost = (request, response) => {
    const id = parseInt(request.params.id)
    console.log("delete")

    pool.query('DELETE FROM comentarios WHERE id_post = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
    })

    pool.query('DELETE FROM post WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
    })
  }


  const getloggedUser = (request, response) => {
    const { username,password } = request.body
    pool.query('SELECT id,username,role FROM users WHERE username = $1 and password= $2',[username,password],  (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }



  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updatePost,
    deletePost,
    getPost,
    createPost,
    getPostById,
    createComment,
    getCommentsbyId,
    getloggedUser,
    getGaleria,
    saveImage
  }