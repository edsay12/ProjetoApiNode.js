"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bcrypt = require('bcryptjs/dist/bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _mariadb = require('mariadb');
var _tokenizer = require('sucrase/dist/parser/tokenizer');




class tokenController{
  async store(req,res){
    const {email ='' , password=''} = req.body
    if(!email || !password){
      return res.status(401).json({
        erros:'credenciais invalidas'
      })
    }
    const user = await _User2.default.findOne({
      where:{
        email
      }
    })


    if(!user){
      return res.status(401).json({
        erros:'Usuario Inexistente'
      })

    }
    console.log(password)
    console.log(user.password)
    if( await (_bcrypt2.default.compare(password,user.password))){
      const payload = {
        id:user.id,
        email:user.email
      }  //dados que poderao ser recuperados deposi
      const jwt = _jsonwebtoken2.default.sign(payload,process.env.TOKEN_SECRET,
        {expiresIn:process.env.TOKEN_EXPIRATION})
        res.json({'token':jwt})
    }


   res.send('senha incorreta')

  }

}

exports. default = new tokenController();
