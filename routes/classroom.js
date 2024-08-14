const express = require('express');
const { createClassroom, assignTeacher, assignStudent } = require('../controllers/classroomController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createClassroom);
router.post('/assignTeacher', authMiddleware, assignTeacher);
router.post('/assignStudent', authMiddleware, assignStudent);

module.exports = router;
