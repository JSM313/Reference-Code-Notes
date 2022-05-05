const moment = require("moment");
const logger = (request, response, next) => {
  console.log(
    `${request.protocol}://${request.get("host")}${
      request.orignalUrl
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;
