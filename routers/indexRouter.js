import { Router } from "express";
import { messages } from "../utils/messages.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    id: messages.length,
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect("/");
});

export default indexRouter;
