var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    title: String,
    category: String,
    details: String
});

module.exports = mongoose.model('task', TaskSchema);