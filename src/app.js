import './database/'
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import homeroute from './routes/homeRoute';
import userroute from './routes/userRoute';
import tokenrout from './routes/tokenRoute'
import alunoroute from './routes/alunoRoute';
import fotoRoute from './routes/fotoRoute';
import {resolve} from 'path'

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routs();
  }


  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static( resolve(__dirname,'uploads')))
  }


  routs() {
    this.app.use("/home",homeroute);
    this.app.use('/user',userroute);
    this.app.use('/token',tokenrout);
    this.app.use('/aluno',alunoroute);
    this.app.use('/foto',fotoRoute);




  }
}

export default new App().app;
