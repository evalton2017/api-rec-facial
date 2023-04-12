import { createLogger, Logger, transports, format } from 'winston';
var path = require('path');
var fs = require('fs');
import 'winston-daily-rotate-file';
var util = require('util');

export class AppLogger {

  static logDirectory = path.join(process.cwd(), 'logs');

  static CreateLogFolderIfNotExists() {
    if (!fs.existsSync(this.logDirectory)) {
      fs.mkdirSync(this.logDirectory);
    }
  }

  static SetLogger() {
    const logFormat = format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`;
    });
    this.logger = createLogger({
      format: format.combine(format.json(), format.timestamp(), logFormat),
      transports: [
        new transports.Console(),
        new transports.DailyRotateFile({
          filename: path.join(AppLogger.logDirectory,'%DATE%.log'),
          datePattern: 'YYYY-MM-DD',
          maxSize: '1g',
          level: 'verbose',
        }),
      ],
      exitOnError: false,
    });
  }

  static configureLogger() {
    this.CreateLogFolderIfNotExists();
    this.SetLogger();
  }

  static GetValue(name, value) {
    if (typeof value === 'string') {
      return value;
    } else {
      return util.inspect(value);
    }
  }

  static GetValueDebug(value) {
    if (typeof value === 'string') {
      return value;
    } else {
      return util.inspect(value, false, 4, true);
    }
  }

  static debug(value) {
    this.logger.debug(this.GetValueDebug(value));
  }

   static error(value) {
    this.logger.error(this.GetValueDebug(value));
  }

   static json(value) {
    this.logger.error(this.GetValueDebug(value));
  }

 static warn(value) {
    this.logger.warn(this.GetValue('warn', value));
  }

   static info(value) {
    this.logger.info(this.GetValue('info', value));
  }
}
