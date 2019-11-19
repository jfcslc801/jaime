// const fs = require('fs');
const multer = require('multer');
const Project = require('./../models/projectModel');
const factory = require('./handlerFactory');

const upload = multer({ dest: 'public/img/projects' });

// multer upload photo
exports.photoUpload = upload.single('photo');
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
