import Testimonial from "../../models/Testimonial.js";

export async function getAllTestimonials(req, res) {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function addTestimonial(req, res) {
  try {
    const { name, testimonial } = req.body;
    const newTestimonial = new Testimonial({ name, testimonial });
    await newTestimonial.save();
    return res
      .status(201)
      .json({ message: "Testimonial added successfully: ", newTestimonial });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteTestimonial(req, res) {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    return res
      .status(200)
      .json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateTestimonial(req, res) {
  try {
    const { name, testimonial } = req.body;
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { name, testimonial },
      { new: true }
    );
    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    return res
      .status(200)
      .json({ message: "Testimonial updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
