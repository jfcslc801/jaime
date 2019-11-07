const path = require('path');
const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const projectRouter = require('./routes/projectRoutes');

const app = express();

// PUG VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
// serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Middle Ware: Hello');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.get('/', (req, res) => {
  res.status(200).render('base');
});

app.use('/projects', projectRouter);

// bad link error handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`));
});

module.exports = app;
