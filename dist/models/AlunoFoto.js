"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Sequelize = require('Sequelize'); var _Sequelize2 = _interopRequireDefault(_Sequelize);



 class AlunoFoto extends _Sequelize.Model{
  static init(sequelize){
    super.init({
      originalname:{
        type:_Sequelize2.default.STRING,
        defaultValue:' ',
        validate:{
         notEmpty:{
            msg:'Campo1 nao pode estar vazio'

          }
        }
      },
      filename:{
        type:_Sequelize2.default.STRING,
        defaultValue:' ',
        validate:{
          notEmpty:{
            msg:'Campo2 nao pode estar vazio'

          }
        }
      },
      url:{
        type:_Sequelize2.default.VIRTUAL,
        get(){
          return `${process.env.BASE_URL}${this.getDataValue('filename')}`
        }

      }


    },{
      sequelize
    })
    return this;
  }

  // static associate(models) {
  //   this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  // }

} exports.default = AlunoFoto;
