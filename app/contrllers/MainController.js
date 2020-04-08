app.controller('MainController',['$scope', $scope => {
    $scope.list = [];
    $scope.addItem = () => {
        $scope.list.push({toDo:$scope.addToDo,complete:false});
    };
    $scope.removeItem = () => {
        let oldList = $scope.list;
        $scope.list = [];
        angular.forEach(oldList, (checked) => {
            if (!checked.done) $scope.list.push(checked);
        });
    }
}]);