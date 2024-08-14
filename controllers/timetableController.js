const Timetable = require('../models/timetable');

exports.createTimetable = async (req, res) => {
  const { classroomId, subject, schedule } = req.body;
  try {
    const timetable = new Timetable({ classroom: classroomId, subject, schedule });
    await timetable.save();
    res.status(201).json(timetable);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
