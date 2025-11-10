import express from "express";
import {
  getAllTestimonials,
  addTestimonial,
  deleteTestimonial,
  updateTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", getAllTestimonials);
router.post("/", addTestimonial);
router.put("/:id", updateTestimonial);
router.delete("/:id", deleteTestimonial);

export default router;
