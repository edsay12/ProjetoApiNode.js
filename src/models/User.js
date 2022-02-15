import Sequelize, { Model } from 'Sequelize'
import bcryptjs from 'bcryptjs'


export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome dever ter entre 3 e 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique:{
          msg:'Email ja foi cadastrado'
        },
        validate: {
          isEmail: {
            msg: 'Email nao e valido'
          }
        }

      },
      password: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      password_hash:{
        type:Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 255],
            msg: 'Campo senha dever ter entre 3 e 255 caracteres'
          }
        }
      }


    }, {
      sequelize
    })
    this.addHook('beforeSave', async (User)=>{
      if(User.password_hash){
        User.password = await bcryptjs.hash(User.password_hash,8);
      }
    })

    return this;
  }
}


