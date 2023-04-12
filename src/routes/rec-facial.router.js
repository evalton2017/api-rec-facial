const express = require('express');
const reconhecimentoFacialRouter = express.Router();
const controller = require('../controllers/rec-facial.controller')

//ROTA PARA CRIAR USUARIO
reconhecimentoFacialRouter.post('/quantidade-rostos',async (req, res)=>{
 return  await  controller.quantidadeRostos(req,res)

});

module.exports = reconhecimentoFacialRouter;
