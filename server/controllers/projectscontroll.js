const Projects = require('../models/projects');

exports.createprojects = async (req,res) =>  {
    const {
        title,
        description,
        summary,
        other_details,
        skills,
        tech_skills_logo,
        roles,
        team,
        duration,
        start_date,
        end_date,
        image,
        git_link,
        website_link
      } = req.body;

    const projects = new Projects({
        title,
        description,
        summary,
        other_details,
        skills,
        tech_skills_logo,
        roles,
        team,
        duration,
        start_date,
        end_date,
        image,
        git_link,
        website_link,
      });

    try {
    const newProject = await projects.save();
        res.status(201).json(newProject);
      } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.getallprojects = async (req, res) => {
    try {
      const projects = await Projects.find();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

exports.getproject = async(req, res) => {
    let project;
    try {
      project = await Projects.findOne({
            _id: req.params.id
      });
      if (project == null) {
        return res.status(400).json({ message: "Cannot find project" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.send(project);
}