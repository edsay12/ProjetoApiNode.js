"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _response = require('express/lib/response');
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class usercontroller {
  async create(req, res, next) {
    try {
      const novouser = await _User2.default.create({
        nome: req.body.nome,
        email: req.body.email,
        password_hash: req.body.password

      })
      res.status(200).send({
        novouser
      })
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((e) => {
          return e.message
        })
      });

    }



  }
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({attributes:['id','nome','email']})
      console.log(req.userId,req.userEmail)
      res.status(200).json(users);

    } catch (err) {
      res.status(404).json(null)


    }

  }
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId)
      
      const {id,nome,email} = user
      res.status(200).json({
        id,
        nome,
        email
      });

    } catch (err) {
      res.status(404).json(null)

    }

  }

  async update(req, res) {

    try {
      const user = await _User2.default.findByPk(req.userId)
      if(!user){
        return res.json('usuario nao existe')

      }
      const updatedUser = await user.update({
        nome: req.body.nome,
        email: req.body.email,
        password_hash: req.body.password

      })
      res.status(200).json(updatedUser);

    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((e) => {
          return e.message
        })
      });


    }



  }async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId)
      if(!user){
        return res.json('usuario nao existe')

      }
      await user.destroy(req.userId)
      res.status(200).json('Ok');

    } catch (err) {
      res.status(404).json(null)

    }



  }

}



exports. default = new usercontroller();
