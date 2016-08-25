var mongoose = require('mongoose');
var PersonSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number}
}, {timestamps: false});
var Person = mongoose.model('Person', PersonSchema);
