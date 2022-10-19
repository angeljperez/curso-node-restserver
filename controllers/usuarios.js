const { response } = require('express');


const usuariosGet = (req, res = response)=> {
    
    const {q,nombre = "no name",apikey,page = 1,limit} = req.query;

    res.json({
        msg: 'get api - usuariosGet' ,
        q,
        nombre,
        apikey,
        page,
        limit
    })
  }

 const usuariosPost = (req, res = response)=> {

    const {nombre,edad} = req.body;

    res.json({
        msg: 'post api - usuariosPost' ,
        nombre,
        edad
    })
  }

 const usuariosPut = (req, res = response)=> {

    const {id} = req.params;

    res.status(201).json({
        msg: 'put api - usuariosPut'  ,
        id
    })
  }

const usuariosPatch = (req, res = response)=> {
    res.json({
        msg: 'patch api - usuariosPatch'   
    })
  }

const usuariosDelete = (req, res = response)=> {
    res.json({
        msg: 'delete api - usuariosDelete'   
    })
  }

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}