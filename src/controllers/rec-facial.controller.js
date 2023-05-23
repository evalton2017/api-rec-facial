const AppError = require('../exception/app-erros');
const faceApiService = require('../service/faceapiService');

exports.quantidadeRostos = async (req, res) => {
  try{
    const { file } = req.files;
    console.log(file)
    const result = await faceApiService.detect(file.data, file.name);
    return res.status(200).json({rostos: result.length});
  }catch(err){
    return res.status(500).json(err.message);
  }

};
