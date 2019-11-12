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
  technologies: {
    type: String,
    trim: true,
    required: [true, 'A project must have a technologies.']
  },
  imageCover: {
    type: String,
    required: [false, 'A tour must have a cover image.']
  },
  website: {
    type: String
  }
});

// Tour Model
const Project = mongoose.model('Project', projectSchema);

const Projects = new Project({
  name: 'Piano',
  description: 'Desktop piano',
  technologies: 'Javascript, HTML, CSS, ES6',
  imageCover: 'piano.jpg',
  website: 'https://piano1-77066.web.app/'
});

Projects.save()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => {
    console.log(err);
  });

// export tour
module.exports = Project;
