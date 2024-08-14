const express = require('express');
const { createTimetable } = require('../controllers/timetableController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createTimetable);

module.exports = router;
