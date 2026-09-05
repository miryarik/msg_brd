import { Router } from "express";
import { messages } from "../utils/messages.js";

const messageRouter = Router();

messageRouter.get("/:id", (req, res) => {
  res.render("message", { item: messages[req.params.id] });
});

export default messageRouter;
