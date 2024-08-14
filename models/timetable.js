const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
    classroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' },
    subject: {type:String ,required: true},
    schedule: [{day:String, startTime:String, endTime:String }] 
});

module.exports = mongoose.model('Timetable', timetableSchema);
