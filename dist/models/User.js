"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Sequelize = require('Sequelize'); var _Sequelize2 = _interopRequireDefault(_Sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);


 class User extends _Sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _Sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome dever ter entre 3 e 255 caracteres'
          }
        }
      },
      email: {
        type: _Sequelize2.default.STRING,
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
        type: _Sequelize2.default.STRING,
        defaultValue: ''
      },
      password_hash:{
        type:_Sequelize2.default.VIRTUAL,
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
        User.password = await _bcryptjs2.default.hash(User.password_hash,8);
      }
    })

    return this;
  }
} exports.default = User;


