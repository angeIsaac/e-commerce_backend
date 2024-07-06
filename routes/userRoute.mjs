import express from "express";
import { postUser } from "../controllers/usersControllers.mjs";

const router = express.Router();

router.post("/", postUser);


export default router;