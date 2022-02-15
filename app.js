import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import homeroute from './src/routes/homeRoute';
import userroute from './src/routes/userRoute';
import tokenrout from './src/routes/tokenRoute'
import './src/database/'

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routs();
  }


  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }


  routs() {
    this.app.use("/home",homeroute);
    this.app.use('/user',userroute);
    this.app.use('/token',tokenrout)



  }
}

export default new App().app;
