"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _AlunoFoto = require('../models/AlunoFoto'); var _AlunoFoto2 = _interopRequireDefault(_AlunoFoto);




const upload = _multer2.default.call(void 0, _multerConfig2.default).single('arquivo')

class fotosController {
  create(req, res, next) {
    return  upload(req, res, async(err) => {
      if (err) {
        return res.status(400).json(err)
      }

      const {originalname,filename} = req.file;
      const save = await _AlunoFoto2.default.create({originalname,filename})
      res.json(save)



    })


  }



}





exports. default = new fotosController();
