import fs from "fs";

function logging(req, res, next) {
  const logMessage = `IP ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}\n`;

  console.log(logMessage);
  fs.writeFile("log.txt", logMessage, { flag: "a" }, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Log has been saved to log.txt");
    }
  });

  next();
}

export default logging;
