import { Router } from "express";
import {
  getUserRouteHandler,
  insertUserRouteHandler,
  poblateRouteHandler,
  removeUserRouteHandler,
  updateUserRouteHandler,
} from "./controllers.routes.js";
import { mainConfig } from "../config/mainConffig.js";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Welcome to api for user crud");
});

const localMiddleware = (req, res, next) => {
  if (mainConfig.local) {
    return res.send("Can modidy data in local enviroment");
  }
  next();
};

router.get("/user/:atr", getUserRouteHandler);
router.get("/poblate/:amt", localMiddleware, poblateRouteHandler);
router.post("/user/create", localMiddleware, insertUserRouteHandler);
router.put("/user/update", localMiddleware, updateUserRouteHandler)
router.delete("/user/delete/:value", localMiddleware, removeUserRouteHandler);



export default router;
