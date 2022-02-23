"use strict";// Aqui fica as configs do banco
require('dotenv').config();

module.exports = {
  dialect:'mariadb',
  host:process.env.DATABASE_HOST,
  port:process.env.DATABASE_PORT,
  username:process.env.DATABASE_USERNAME,
  password:process.env.DATABASE_PASSWORD,
  database:process.env.DATABASE,
  define:{
    // define a data de cração e de atualização
    timestamps:true,
    // trasnforma de camelCase para o com _ ex alunoSala -> aluno_sala
    underscored:true,
    underscoredAll:true,
    'createdAt':'created_at',
    'updateAt':'updated_at'
  },
  dialectOptions:{
    timezone: 'America/Sao_Paulo'

  },
  timezone: 'America/Sao_Paulo'
}




