import bcrypt from "bcryptjs/dist/bcrypt";
import User from "../models/User";
import jsonwebtoken from "jsonwebtoken";
import { defaultOptions } from "mariadb";
import { Token } from "sucrase/dist/parser/tokenizer";




class tokenController{
  async store(req,res){
    const {email ='' , password=''} = req.body
    if(!email || !password){
      return res.status(401).json({
        erros:'credenciais invalidas'
      })
    }
    const user = await User.findOne({
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
    if( await (bcrypt.compare(password,user.password))){
      const payload = {
        id:user.id,
        email:user.email
      }  //dados que poderao ser recuperados deposi
      const jwt = jsonwebtoken.sign(payload,process.env.TOKEN_SECRET,
        {expiresIn:process.env.TOKEN_EXPIRATION})
        res.json({'token':jwt})
    }


   res.send('senha incorreta')

  }

}

export default new tokenController();
