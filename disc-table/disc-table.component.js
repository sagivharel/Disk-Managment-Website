angular
    .module('discTable')
    .component('discTable', {
        templateUrl: 'disc-table/disc-table.html',
        controller: ['$scope', '$http', '$routeParams',
            function ($scope, $http, $routeParams) {
                var type = $routeParams.type;
                $scope.type = type;
                $http.get(`db-actions/get_discs.php?type=${type}`)
                    .then(function (response) {
                        $scope.discs = response.data.discs;
                    });

                // handle adding new disc
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
                        // actions after added successfully
                    });
                }
            },
        ]
    })