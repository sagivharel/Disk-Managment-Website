angular
    .module('discTable')
    .component('discTable', {
        templateUrl: 'disc-table/disc-table.html',
        controller: ['$scope', '$http', '$routeParams',
            function ($scope, $http, $routeParams) {
                var type = $routeParams.type,
                    getDiscs = function () {
                        $http.get(`db-actions/get_discs.php?type=${type}`)
                            .then(function (response) {
                                $scope.discs = response.data.discs;
                            });
                    };
                $scope.type = type;
                getDiscs();

                $scope.removeDisc = function (discId) {
                    $http.delete(`db-actions/remove_disc.php?id=${discId}`)
                        .then(response => {
                            $scope.statusMsg = response.data;
                            getDiscs();
                        })
                }
            }
        ]
    })