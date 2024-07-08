import express from "express";
import { postUser } from "../controllers/usersControllers.mjs";

const userRouter = express.Router();

userRouter.post("/", postUser);


export default userRouter;