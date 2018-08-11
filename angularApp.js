/*var app = angular.module("app",[]);
     app.controller('myCtrl', function($scope){
    $scope.firstName = "Rushda";
    $scope.lastName = "Saba";
     });
     */

//      var app = angular.module("myApp",[]);
//      app.directive("w3TestDirective", function(){
//         return{
//             template: " I was made directiove contorlller"
// };
//      });


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});