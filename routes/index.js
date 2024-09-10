const express = require('express');
const apiRoutes = require('./api/apiRoutes');
const viewRoutes = require('./viewRoutes');

const router = express.Router();

// IMPORT ROUTES
router.use('/api', apiRoutes);
router.use('/', viewRoutes);

module.exports = router;