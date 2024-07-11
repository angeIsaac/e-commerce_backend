import { Router } from "express"
import { create, deleteProd, getOneProd, getProd, update } from "../controllers/productControlers.mjs"

const router = Router();

router.get("/:id", getOneProd);
router.get("/", getProd);
router.delete("/:id", deleteProd);
router.put("/:id", update);
router.post("/", create);

export default router;