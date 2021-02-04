const Projects = require("../models/projects");

exports.getProject = async (req, res, next) => {
    let project;
    try {
      project = await Projects.findById(req.params.id);
      if (project == null) {
        return res.status(400).json({ message: "Cannot find project" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.project = project;
    next();
  }
