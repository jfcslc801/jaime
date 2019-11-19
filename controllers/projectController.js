// const fs = require('fs');
const multer = require('multer');
const Project = require('./../models/projectModel');
const factory = require('./handlerFactory');
const AppError = require('./../utils/appError');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/projects');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `project-${Date.now()}.${ext}`);
  }
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an img, please upload and img.', 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

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
