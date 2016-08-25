app.factory('PeopleFactory', function($http) {
    var people = []
    var factory = {};

    factory.get = function(callback) {
        $http.get('/people').then(function(res) {
            people = res.data;
            callback(people);
        })
    }
    factory.create = function(person, callback) {
        $http.post('/people', person).then(function(res) {
            callback(res);
        })
    }
    factory.delete = function(person, callback) {
        $http.delete('/people/'+person._id).then(function(res) {
            console.log(res);
            callback(res);
        })
    }

    return factory;
})
