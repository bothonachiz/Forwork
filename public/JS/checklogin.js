angular.module('checklogin', [])
  .controller('checkloginCtrl', function($scope, $http) {
    $scope.checklogin = function() {
      //console.log($scope.username);
      $http({
        method: 'POST',
        url: '/checklogin',
        data: {
          username: $scope.username,
          password: $scope.password
        }
      }).then(function successCallback(response) {
      console.log(response.data[0]);
        if(response.data != ''){
          alert("Welcome!");
        }
        else{
          alert("Password Invalid");
        }
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }
  });
