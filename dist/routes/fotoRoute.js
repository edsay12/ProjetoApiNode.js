"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _fotosController = require('../controllers/fotosController'); var _fotosController2 = _interopRequireDefault(_fotosController);
var _express = require('express');
var _AuthenticationMiddleware = require('../middlewares/AuthenticationMiddleware'); var _AuthenticationMiddleware2 = _interopRequireDefault(_AuthenticationMiddleware);
const fotoRoute = _express.Router.call(void 0, );




fotoRoute.post('/create',_AuthenticationMiddleware2.default,_fotosController2.default.create)


exports. default = fotoRoute;
