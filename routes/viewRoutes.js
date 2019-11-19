const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/project', viewsController.getProject);
router.get('/create-projects', viewsController.createProject);

module.exports = router;
