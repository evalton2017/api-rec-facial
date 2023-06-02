const express = require('express');
const reconhecimentoFacialRouter = express.Router();
const controller = require('../controllers/rec-facial.controller')

//ROTA PARA REALIZAR LEITURA E RECONHECIMENTO DA IMAGEM
reconhecimentoFacialRouter.post('/quantidade-rostos',async (req, res)=>{
 return  await  controller.quantidadeRostos(req,res)

});

//API TESTES
reconhecimentoFacialRouter.get('/teste', async (req, res) => {
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.write("<h1>Teste Node</h1>");
  res.end();

});

module.exports = reconhecimentoFacialRouter;
