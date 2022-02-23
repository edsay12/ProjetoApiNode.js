"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _tokenController = require('../controllers/tokenController'); var _tokenController2 = _interopRequireDefault(_tokenController);
var _userController = require('../controllers/userController'); var _userController2 = _interopRequireDefault(_userController);
var _AuthenticationMiddleware = require('../middlewares/AuthenticationMiddleware'); var _AuthenticationMiddleware2 = _interopRequireDefault(_AuthenticationMiddleware);

const userroute= _express.Router.call(void 0, );

userroute.get('/index',_AuthenticationMiddleware2.default,_userController2.default.index) //Lista usuarios
userroute.get('/index/show',_AuthenticationMiddleware2.default,_userController2.default.show) // Lista usuario
userroute.post('/create',_userController2.default.create);//cria um usuario
userroute.put('/index/',_AuthenticationMiddleware2.default,_userController2.default.update) // atualiza usuario.
userroute.delete('/index/',_AuthenticationMiddleware2.default,_userController2.default.delete) // deleta um usuario.


exports. default = userroute;

