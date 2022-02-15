import {Router} from "express";
import homeController from "../controllers/homeController";
const homeroute= Router();

homeroute.get('/index',homeController.index);


export default homeroute;
