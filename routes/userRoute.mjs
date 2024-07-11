import express from "express";
import { postUser, delUser, update, getOneUser} from "../controllers/usersControllers.mjs";

const userRouter = express.Router();

userRouter.put("/:id", update);
userRouter.post("/", postUser);
userRouter.delete("/:id", delUser);
userRouter.get("/:id", getOneUser);


export default userRouter;