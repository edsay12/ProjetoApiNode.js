"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('./database/');
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();

var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _homeRoute = require('./routes/homeRoute'); var _homeRoute2 = _interopRequireDefault(_homeRoute);
var _userRoute = require('./routes/userRoute'); var _userRoute2 = _interopRequireDefault(_userRoute);
var _tokenRoute = require('./routes/tokenRoute'); var _tokenRoute2 = _interopRequireDefault(_tokenRoute);
var _alunoRoute = require('./routes/alunoRoute'); var _alunoRoute2 = _interopRequireDefault(_alunoRoute);
var _fotoRoute = require('./routes/fotoRoute'); var _fotoRoute2 = _interopRequireDefault(_fotoRoute);
var _path = require('path');

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routs();
  }


  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static( _path.resolve.call(void 0, __dirname,'uploads')))
  }


  routs() {
    this.app.use("/home",_homeRoute2.default);
    this.app.use('/user',_userRoute2.default);
    this.app.use('/token',_tokenRoute2.default);
    this.app.use('/aluno',_alunoRoute2.default);
    this.app.use('/foto',_fotoRoute2.default);




  }
}

exports. default = new App().app;
