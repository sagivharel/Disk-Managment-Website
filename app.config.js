angular
    .module('diskManagment')
    .config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: 'Welcome to disk managment site',
        })
        .when("/:type", {
            template: "<disc-table></disc-table>",
        })
        .when("/err", {
            template: 'there is an error...'
        })
        .otherwise("/err");
});