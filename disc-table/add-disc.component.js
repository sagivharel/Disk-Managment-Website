angular
    .module('discTable')
    .component('addDisc', {
        templateUrl: 'disc-table/add-disc.html',
        controller: ['$scope', '$http', function ($scope, $http) {
            $scope.addDisc = function () {
                var request = $http({
                    method: "post",
                    url: "db-actions/adddisc.php",
                    data: {
                        name: $scope.discOwner,
                        reason: $scope.discReason
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
                request.then(function () {
                    console.log("succeed");
                });
            }
        }]
    });