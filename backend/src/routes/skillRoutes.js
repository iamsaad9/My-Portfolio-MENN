import express from "express";
import {
  getAllSkills,
  deleteSkill,
  updateSkill,
  addSkill,
} from "../controllers/skillController.js";

const router = express.Router();

router.get("/", getAllSkills);
router.post("/", addSkill);
router.delete("/:id", deleteSkill);
router.put("/:id", updateSkill);

export default router;
