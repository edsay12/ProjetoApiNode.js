import Sequelize,{Model} from 'Sequelize'

export default class Aluno extends Model{
  static init(sequelize){
    super.init({
      nome:{
        type:Sequelize.STRING,
        defaultValue:' ',
        validate:{
          len:{
            arg:[3,225],
            msg:'o nome precisa ter entre 3 e 255 caracteres'

          }
        }
      },
      sobrenome:{
        type:Sequelize.STRING,
        defaultValue:' ',
        validate:{
          len:{
            arg:[3,225],
            msg:'o nome precisa ter entre 3 e 255 caracteres'

          }
        }
      },
      email:{
        type:Sequelize.STRING,
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
        type:Sequelize.INTEGER,
        defaultValue:' ',
        validate:{
          isInt:{
            msg:'A idade precisa ser um numero inteiro'
          }
        }

      },
      peso:{
        type:Sequelize.FLOAT,
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
}
