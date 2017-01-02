'use strict';

angular.module('spawithTokenAuthenticationApp')
  .controller('RegisterCtrl', registerController);

registerController.$inject = ['$http', 'alert'];
function registerController($http, alert) {
  var url = 'http://localhost:3000/register';
  var user = {};

  this.submit = function () {
    user = {
      email: this.email,
      password: this.password
    };

    $http.post(url, user)
      .then(function(){
        alert('success', 'Ok!', 'You are now registered');
      })
      .catch(function(){
        alert('warning', 'Oops!!', 'Could not register');
      });
  }
}
