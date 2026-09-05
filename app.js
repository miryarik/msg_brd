import express from "express";
import path from "node:path";
import indexRouter from "./routers/indexRouter.js";
import messageRouter from "./routers/messageRouter.js";

const app = express();
const PORT = 8000;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/message", messageRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Listening on " + PORT);
});
