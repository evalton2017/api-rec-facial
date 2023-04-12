const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const uplodFolder = path.resolve(__dirname, '..','..','..','uploads');
export default{
  directory: uplodFolder,
  storage: multer.diskStorage({
    destination: uplodFolder,
    filename(req, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');

        const filename = `${fileHash}-${file.originalname}`;

        callback(null, filename);
    },
  })
}

 module.exports = uplodFolder;