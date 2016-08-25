//Require the controller
var People = require('../controllers/people.js');
//////////////////////////////////////////////////////////
//                        Routes                        //
//////////////////////////////////////////////////////////
module.exports = function(app) {
    app.get('/people', function(req, res) {
        People.get(req, res);
    })
    app.post('/people', function(req, res) {
        People.create(req, res);
    })
    app.delete('/people/:id', function(req, res) {
        People.delete(req, res);
    })
}
