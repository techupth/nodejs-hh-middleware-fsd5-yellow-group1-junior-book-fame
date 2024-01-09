import fs from "fs/promises";

function logging(req, res, next) {
  const logData = `\nIP: ${req.ip} - Method: ${req.method} - Endpoint: ${req.originalUrl}`;
  const logFileName = "logging.txt";

  fs.writeFile(logFileName, logData, { flag: "a" });
  {
  }
  next();
}

export default logging;
