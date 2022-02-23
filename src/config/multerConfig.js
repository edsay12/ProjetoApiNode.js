import multer from 'multer'
import {resolve,extname} from 'path'

const aleatorio = ()=>{
  return Math.floor(Math.random()  *1000 + 1000)
}



export default {
  fileFilter:(req,file,cb) =>{
    if(file.mimetype != 'image/png' && file.mimetype != 'image/jpeg'){

      console.log('eroo nao e um arquivo valido')
      return cb(new multer.MulterError("arquivo precisa ser jpg"))
    }else{

      return cb(null,true)
    }

  },
  storage:multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,resolve(__dirname,'..','..','uploads','images'))
    },
    filename:(req,file,cb)=>{
      cb(null,`${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
    },
  })
}
