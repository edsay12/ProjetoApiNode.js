"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Sequelize = require('Sequelize'); var _Sequelize2 = _interopRequireDefault(_Sequelize);

 class Aluno extends _Sequelize.Model{
  static init(sequelize){
    super.init({
      nome:{
        type:_Sequelize2.default.STRING,
        defaultValue:' ',
        validate:{
          len:{
            arg:[3,225],
            msg:'o nome precisa ter entre 3 e 255 caracteres'

          }
        }
      },
      sobrenome:{
        type:_Sequelize2.default.STRING,
        defaultValue:' ',
        validate:{
          len:{
            arg:[3,225],
            msg:'o nome precisa ter entre 3 e 255 caracteres'

          }
        }
      },
      email:{
        type:_Sequelize2.default.STRING,
        defaultValue:' ',
        unique:{
          msg:"E-mail ja cadastrado"
        },
        validate:{
          isEmail:{
            msg:'Digite um email valido'
          }
        }
      },
      idade:{
        type:_Sequelize2.default.INTEGER,
        defaultValue:' ',
        validate:{
          isInt:{
            msg:'A idade precisa ser um numero inteiro'
          }
        }

      },
      peso:{
        type:_Sequelize2.default.FLOAT,
        defaultValue:' ',
        validate:{
          isFloat:{
            msg:'Peso Precisa ser um numero'
          }
        }
      }
    },{
      sequelize
    })
    return this;
  }

  // static associate(models) {
  //   this.hasMany(models.AlunoFoto, { foreignKey: 'aluno_id' });
  // }
} exports.default = Aluno;
