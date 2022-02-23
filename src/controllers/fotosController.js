import multerConfig from '../config/multerConfig';
import multer from 'multer'

import AlunoFoto from '../models/AlunoFoto';




const upload = multer(multerConfig).single('arquivo')

class fotosController {
  create(req, res, next) {
    return  upload(req, res, async(err) => {
      if (err) {
        return res.status(400).json(err)
      }

      const {originalname,filename} = req.file;
      const save = await AlunoFoto.create({originalname,filename})
      res.json(save)



    })


  }



}





export default new fotosController();
