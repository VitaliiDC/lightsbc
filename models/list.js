const {Schema, model} = require('mongoose');

const listSchema = new Schema({
    list: [String]
});

module.exports = model('List', listSchema);