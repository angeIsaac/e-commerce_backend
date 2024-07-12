import express from "express";
import { postUser, delUser, update, getOneUser} from "../controllers/usersControllers.mjs";
import connexion from "../controllers/loginControler.mjs";

const userRouter = express.Router();
userRouter.post("/login", connexion);
userRouter.put("/:id", update);
userRouter.post("/", postUser);
userRouter.delete("/:id", delUser);
userRouter.get("/:id", getOneUser);


export default userRouter;