const faceApiService = require('../service/faceapiService');

exports.quantidadeRostos = async (req, res) => {
  const { file } = req.files;
  console.log(file)
  const result = await faceApiService.detect(file.data, file.name);
  return res.status(200).json(result.length+" Rostos encontrados");
};
