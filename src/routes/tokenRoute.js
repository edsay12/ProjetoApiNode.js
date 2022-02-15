import {Router} from "express";
import tokenController from "../controllers/tokenController";


const tokenrout = Router();
tokenrout.post('/',tokenController.store)





export default tokenrout;

