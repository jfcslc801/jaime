// const fs = require('fs');
const Project = require('./../models/projectModel');
const factory = require('./handlerFactory');

// GET ALL TOURS
exports.getAllProjects = factory.getAll(Project);
// GET Project
exports.getProject = factory.getOne(Project);
// CREATE Project
exports.createProject = factory.createOne(Project);
// UPDATE Project
exports.updateProject = factory.updateOne(Project);
// DELETE Project
exports.deleteProject = factory.deleteOne(Project);
