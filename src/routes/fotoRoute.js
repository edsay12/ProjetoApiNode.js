
import fotosController from "../controllers/fotosController";
import { Router } from "express";
import AutheticationMiddleware from '../middlewares/AuthenticationMiddleware'
const fotoRoute = Router();




fotoRoute.post('/create',AutheticationMiddleware,fotosController.create)


export default fotoRoute;
