const Classroom = require('../models/classroom');

exports.createClassroom = async (req, res) => {
  const { name, startTime, endTime, days } = req.body;
  try {
    const classroom = new Classroom({ name, startTime, endTime, days });
    await classroom.save();
    res.status(201).json(classroom);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.assignTeacher = async (req, res) => {
  const { classroomId, teacherId } = req.body;
  try {
    const classroom = await Classroom.findById(classroomId);
    if (!classroom) return res.status(404).json({ error: 'Classroom not found' });
    classroom.teacher = teacherId;
    await classroom.save();
    res.json(classroom);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.assignStudent = async (req, res) => {
  const { classroomId, studentId } = req.body;
  try {
    const classroom = await Classroom.findById(classroomId);
    if (!classroom) return res.status(404).json({ error: 'Classroom not found' });
    classroom.students.push(studentId);
    await classroom.save();
    res.json(classroom);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
