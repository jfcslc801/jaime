const Project = require('../models/projectModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
  // GET TOUR DATA
  const projects = await Project.find();
  //BUILD TEMPLATE
  // RENDER TEMPLATE
  res.status(200).render('overview', {
    title: 'All projects',
    projects
  });
});

exports.getProject = (req, res) => {
  res.status(200).render('project', {
    title: 'The Forest Hiker.'
  });
};

exports.createProject = (req, res) => {
  res.status(200).render('project', {
    title: 'Create Project'
  });
};
