"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class alunoController {
  async index(req, res, next) {
    const aluno = await _Aluno2.default.findAll();
    if (!aluno) {
      return res.json('0 Ocorrencias de alunos')
    }
    return res.status(200).json(aluno)
  }

  async show(req, res, next) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        erros: 'id faltando'
      })
    }
    try {
      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.json({
          erros: _express2.default.erros.map(err => err.message)
        })
      }
      res.status(200).json(aluno)


    } catch (e) {
      return res.json({
        erros: e
      })
    }

  }

  async create(req, res, next) {
    try {
      const aluno = await _Aluno2.default.create(req.body)
      res.json(aluno)

    } catch (e) {
      return res.json({
        erros: e.erros.map(err => err.message)

      })
    }

  }

  async update(req, res, next) {
    try {
      const {id} = req.params
      const aluno = await _Aluno2.default.findByPk(id)
      if(!aluno){
        return res.json('aluno nao existe')

      }
      const updatedAluno = await aluno.update(req.body)
      res.status(200).json(updatedAluno);

    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((e) => {
          return e.message
        })
      });


    }

  }

  async delete(req, res, next) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        erros: 'id faltando'
      })
    }
    try {
      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.json({
          erros: _express2.default.erros.map(err => err.message)
        })
      }
      await aluno.destroy()
      res.send('sucess')


    } catch (e) {
      return res.json({
        erros: e.erros.map(err => err.message)
      })
    }

  }

}


exports. default = new alunoController();


   // nome:'edvan',
      // sobrenome:'silva',
      // idade:'22',
      // email:'edvanSilva123@gmail.com',
      // peso:10.3
