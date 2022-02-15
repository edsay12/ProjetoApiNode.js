
import { json } from "express/lib/response";
import User from "../models/User";

class usercontroller {
  async create(req, res, next) {
    try {
      const novouser = await User.create({
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
      const users = await User.findAll({attributes:['id','nome','email']})
      console.log(req.userId,req.userEmail)
      res.status(200).json(users);

    } catch (err) {
      res.status(404).json(null)


    }

  }
  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId)
      
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
      const user = await User.findByPk(req.userId)
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
      const user = await User.findByPk(req.userId)
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



export default new usercontroller();
