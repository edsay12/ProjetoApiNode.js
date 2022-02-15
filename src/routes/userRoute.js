import {Router} from "express";
import tokenController from "../controllers/tokenController";
import usercontroller from "../controllers/userController";
import AuthenticationMiddleware from "../middlewares/AuthenticationMiddleware";

const userroute= Router();

userroute.get('/index',AuthenticationMiddleware,usercontroller.index) //Lista usuarios
userroute.get('/index/show',AuthenticationMiddleware,usercontroller.show) // Lista usuario

userroute.post('/create',usercontroller.create);//cria um usuario

userroute.put('/index/',AuthenticationMiddleware,usercontroller.update) // atualiza usuario.
userroute.delete('/index/',AuthenticationMiddleware,usercontroller.delete) // deleta um usuario.


export default userroute;

