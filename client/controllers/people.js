app.controller('PeopleController', function($scope, PeopleFactory) {
    console.log('People Controller loaded');
    $scope.people = [];

    PeopleFactory.get(function(data) {
        $scope.people = data;
    })

    $scope.create = function() {
        PeopleFactory.create($scope.newPerson, function(data) {
            PeopleFactory.get(function(data) {
                $scope.people = data;
                $scope.newPerson = {};
            })
        })
    }

    $scope.delete = function(person) {
        PeopleFactory.delete(person, function(data) {
            console.log('Factory done');
            PeopleFactory.get(function(data) {
                $scope.people = data;
            })
        })
    }

})
