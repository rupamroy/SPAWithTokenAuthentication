'use strict';

angular.module('spawithTokenAuthenticationApp')
  .controller('RegisterCtrl', registerController);

registerController.$inject = ['$http', 'alert'];
function registerController($http, alert) {
  var url = 'http://localhost:9000';
  var user = {
    user: this.user,
    password: this.password
  };

  this.submit = function () {
    $http.post(url, user)
      .then(function(){
        alert('warning', 'Ok!', 'You are now registered');
      })
      .catch(function(){
        alert('warning', 'Oops!!', 'Could not register');
      });
  }
}
