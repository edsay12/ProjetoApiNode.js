import Aluno from "../models/Aluno";
class homecontroller{
 async  index(req,res,next){
    const novoAluno = await Aluno.create({
      nome:'edvan',
      sobrenome:'silva',
      idade:'22',
      email:'edvanSilva123@gmail.com',
      peso:10.3
    })
    res.json(novoAluno)


  }
}


export default new homecontroller();
