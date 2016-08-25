var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = (function() {
    return {
        get: function(req, res) {
            Person.find({}, function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(data);
                }
            })
        },
        create: function(req, res) {
            console.log(req.body);
            //make a new obj
            var person = new Person(req.body);
            person.save(function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(data);
                }
            })
        },
        delete: function(req, res) {
            Person.findOne({_id: req.params.id}, function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    Person.remove(data, function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json(data);
                        }
                    });
                }
            })
        }
    }
})()
