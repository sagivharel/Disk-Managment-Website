angular
    .module('discTable')
    .component('addDisc', {
        templateUrl: 'disc-table/add-disc.html',
        controller: ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
            $scope.addDisc = function () {
                var request = $http({
                    method: "post",
                    url: "db-actions/add_disc.php",
                    data: {
                        name: $scope.discOwner,
                        reason: $scope.discReason,
                        type: $routeParams.type
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
                request.then(respone => {
                    $scope.statusMsg = respone.data;
                });
            }
        }]
    });