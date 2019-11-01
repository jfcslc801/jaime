const mongoose = require('mongoose');

// Tour Schema
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'A project must have a name.']
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A project must have a descriptuon.']
  },
  imageCover: {
    type: String,
    required: [false, 'A tour must have a cover image.']
  }
});

// Tour Model
const Project = mongoose.model('Project', projectSchema);

const testProject = new Project({
  name: 'test 2',
  description: 'test'
});

testProject
  .save()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => {
    console.log(err);
  });

// export tour
module.exports = Project;
