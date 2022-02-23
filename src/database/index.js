import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import AlunoFoto from '../models/AlunoFoto';

const models = [Aluno, User, AlunoFoto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

// models.forEach((model) => model.associate && model.associate(connection.models));
