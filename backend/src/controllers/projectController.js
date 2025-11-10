import Project from "../../models/Project.js";

export async function getAllProjects(req, res) {
  try {
    const project = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(project);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createProject(req, res) {
  try {
    const {
      title,
      description,
      image,
      gitHubLink,
      vercelLink,
      techStack,
      startedAt,
      endedAt,
    } = req.body;
    console.log(
      title,
      description,
      image,
      gitHubLink,
      vercelLink,
      techStack,
      startedAt,
      endedAt
    );

    const newProject = new Project({
      title,
      description,
      image,
      gitHubLink,
      vercelLink,
      techStack,
      startedAt,
      endedAt,
    });

    await newProject.save();
    res.status(201).json({ message: "Project created scucessfully" });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteProject(req, res) {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    console.log("Deleted project:", deletedProject);
    res.status(201).json({ message: "deleted a project" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateProject(req, res) {
  try {
    const {
      title,
      description,
      image,
      gitHubLink,
      vercelLink,
      techStack,
      startedAt,
      endedAt,
    } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        image,
        gitHubLink,
        vercelLink,
        techStack,
        startedAt,
        endedAt,
      },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    console.log("✅ Updated project:", updatedProject);
    res
      .status(200)
      .json({ message: "Project updated successfully", updatedProject });
  } catch (error) {
    console.error("❌ Error updating project:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getProjectById(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
