angular.module('diskManagment', [
    'discTable'
]);

// app.controller('cd', function ($scope, $http) {
//     $http.get("db-actions/get_discs.php?type=cd")
//         .then(function (response) {
//             console.log(response.data);
//             $scope.discs = response.data.discs;
//         });
// });

// app.controller('dvd', function ($scope, $http) {
//     $http.get("db-actions/get_discs.php?type=dvd")
//         .then(function (response) {
//             $scope.discs = response.data.discs;
//         });
// });

// app.controller('dvddl', function ($scope, $http) {
//     $http.get("db-actions/get_discs.php?type=dvddl")
//         .then(function (response) {
//             $scope.discs = response.data.discs;
//         });
// });

// app.controller("addDisc", function ($scope, $http) {
//     $scope.addDisc = function () {
//         var request = $http({
//             method: "post",
//             url: "adddisc.php",
//             data: {
//                 name: $scope.discOwner,
//                 reason: $scope.discReason
//             },
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//         });
//         request.then(function (data) {
//             console.log("succeed");
//         });
//    } 
// });