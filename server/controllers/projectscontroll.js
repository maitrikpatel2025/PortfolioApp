const Projects = require("../models/projects");


exports.getallprojects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(201).json(projects);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.createprojects = async (req, res) => {

  const projects = new Projects({
    title : req.body.title,
    description : req.body.description,
    summary : req.body.summary,
    skills : req.body.skills,
    tech_skills_logo : req.body.tech_skills_logo,
    team : req.body.team,
    roles : req.body.roles,
    other_details : req.body.other_details,
    duration : req.body.duration,
    start_date : req.body.start_date,
    end_date : req.body.end_date,
    git_link : req.body.git_link,
    website_link : req.body.website_link,
  });

  try {
    const newProject = await projects.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getbyid = async (req, res) => {
  res.status(201).json(res.project);
};

exports.editbyid = async (req, res) => {
  if (req.body.title != null) {
    res.project.title = req.body.title;
    res.project.description = req.body.description;
    res.project.summary = req.body.summary;
    res.project.skills = req.body.skills;
    res.project.tech_skills_logo = req.body.tech_skills_logo;
    res.project.team = req.body.team;
    res.project.roles = req.body.roles;
    res.project.other_details = req.body.other_details;
    res.project.duration = req.body.duration;
    res.project.start_date = req.body.start_date;
    res.project.end_date = req.body.end_date;
    res.project.git_link = req.body.git_link;
    res.project.website_link = req.body.website_link;
  }
  try {
    const updatedproject = await res.project.save();
    res.json(updatedproject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletebyid = async (req, res) => {
  try {
    await res.project.remove();
    res.status(200).json({ message: "delete" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.imageup = (req, res, next) => {
  console.log(req.file)
  try {
    res.status(201).json({
      message: "File uploded successfully",
    });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

/*

exports.editproject = async (req, res) => {
  
  const project = await Projects.findByIdAndUpdate({ _id: req.params.id}, 
    { 
      title: req.body.title,
      description: req.body.description,
      skills: req.body.skills,
      summary: req.body.summary,
      other_details:req.body.other_details,
      tech_skills_logo : req.body.tech_skills_logo,
      roles: req.body.roles,
      team:req.body.team,
      duration:req.body.duration,
      start_date:req.body.start_date,
      end_date:req.body.end_date,
      image:req.body.image,
      git_link:req.body.git_link,
      website_link: req.body.website_link,
   }, 
  );
  if (!project) return res.status(404).send('The product with the given ID was not found.');
  try {
    const updatedProject = project.save();
    res.status(201).json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.editproject = async (req, res,next) => {
  try{
    project = await Projects.findOne({
      _id: req.params.id,
    });
    if (project == null) {
      return res.status(400).json({ message: "Cannot find project" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.project = project
  
  next()
  if(req.body.title != null && req.body.description != null){
    res.project.title = req.body.title,
    res.project.description = req.body.description
  }
  try {
    const updatedproject = res.project.save();
    res.json(updatedproject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

};
*/
