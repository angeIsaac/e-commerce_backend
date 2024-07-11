import { create, getCommand, deleteCommand, update } from "../controllers/commandControler.mjs";
import { Router } from "express";

const router = Router();

router.put("/:id", update);
router.get("/", getCommand);
router.delete("/:id", deleteCommand);
router.post("/", create);


export default router;