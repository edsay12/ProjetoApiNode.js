"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _alunoController = require('../controllers/alunoController'); var _alunoController2 = _interopRequireDefault(_alunoController);

const alunoroute = _express.Router.call(void 0, );

alunoroute.get('/index',_alunoController2.default.index);

alunoroute.get('/show/:id',_alunoController2.default.show);

alunoroute.post('/create',_alunoController2.default.create);

alunoroute.put('/update/:id',_alunoController2.default.update);

alunoroute.delete('/delete/:id',_alunoController2.default.delete);


exports. default = alunoroute;
