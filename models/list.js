const {Schema, model} = require('mongoose');

const listSchema = new Schema({
    list: [String],
    date: {type: Date, default: Date.now}
});

module.exports = model('List', listSchema);