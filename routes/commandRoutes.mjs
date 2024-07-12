import { create, getCommand, deleteCommand, update } from "../controllers/commandControler.mjs";
import { Router } from "express";
import authenticate from "../midleware/authenticate.mjs";

const router = Router();

router.use(authenticate);
router.put("/:id", update);
router.get("/", getCommand);
router.delete("/:id", deleteCommand);
router.post("/", create);


export default router;