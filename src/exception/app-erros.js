class AppError {
 
    constructor(message, statusCode = 400) {
      message = message;
      statusCode = statusCode;
    }
  }
  
  module.exports = AppError;