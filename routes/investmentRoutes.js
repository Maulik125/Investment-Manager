const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const { createFD, getFDs } = require('../controllers/investmentController');

const { getDashboard } = require('../controllers/dashboardController');
router.get('/dashboard', auth, getDashboard);


router.post('/fixed-deposits', auth, createFD);
router.get('/fixed-deposits', auth, getFDs);
// Add PUT, DELETE, and similar routes for Property and Stock

module.exports = router;
