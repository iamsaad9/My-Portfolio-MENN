import mongoose from "mongoose";

//1- Create a schema
//2- Create a model based of the schema

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    gitHubLink: {
      type: String,
      required: false,
    },
    vercelLink: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    techStack: {
      type: [String],
      required: true,
    },
    startedAt: {
      type: Date,
      required: true,
    },
    endedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
