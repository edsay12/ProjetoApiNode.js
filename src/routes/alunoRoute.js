import {Router} from "express";

import alunoController from "../controllers/alunoController";

const alunoroute = Router();

alunoroute.get('/index',alunoController.index);

alunoroute.get('/show/:id',alunoController.show);

alunoroute.post('/create',alunoController.create);

alunoroute.put('/update/:id',alunoController.update);

alunoroute.delete('/delete/:id',alunoController.delete);


export default alunoroute;
