import jsonwebtoken from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
   return res.status(401).json('login Required')
  }
  const [bearer,token] = authorization.split(' ');

  try{
    const dados = jsonwebtoken.verify(token,process.env.TOKEN_SECRET)
    const {id,email} = dados
    const user = await User.findOne({
      where:{
        id,
        email
      }
    })
    if(!user){
      return res.status(401).json("invalid User");
    }


    req.userId = id
    req.userEmail = email
    return next();
  }catch(e){
    return res.status(401).json("invalid token");
  }

}
