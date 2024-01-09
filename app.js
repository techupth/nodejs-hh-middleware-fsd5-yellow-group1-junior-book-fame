import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignments.js";
import logging from "./midlewares/logging.js";
import assignmentValidation from "./midlewares/assignmentValidation.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/assignments", assignmentRouter);
app.use(logging);
app.use(assignmentValidation);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
