"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _tokenController = require('../controllers/tokenController'); var _tokenController2 = _interopRequireDefault(_tokenController);


const tokenrout = _express.Router.call(void 0, );
tokenrout.post('/',_tokenController2.default.store)





exports. default = tokenrout;

