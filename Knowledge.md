# Overview
This document contains important tips and knowledge for ths project

## Why OAuth2

Because now mobiles etc cannot rely on cookies based authentication system

## JWTS

A jwt has three sections 

1. Header
1. Payload
1. Signature

Steps:

1. **client Logs in** - email and password are validates. Server encodes the userid and few other things against a secret and send it to client. This is a JWT token comprised of the header, payload and signature
1. **client recieves the jwt** - client receives and stores it in local storage
1. **client restarts** - No matter how many times the client restarts he is still authenticated unless and until the jwt expires. 
1. **client requests a protected resource** - The client puts the jwt in the header , server looks for it in the header , decodes it and validates that the client is a know validated client and hence sends the request.

### conclusion

1. JWTs are super simple
1. There is no state or database requirement
1. The userid is embedded in the jwt token so no need to make an extra call to get user info
1. no cookies and CORS issues , hence mobile ready


## UI

### using UI router

```js
angular
  .module('spawithTokenAuthenticationApp', ['ui.router']);
```

```js
AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function AppConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('register', {
    url: '/register',
    templateUrl: '/views/register.html'
  }).state('main', {
    url: '/main',
    templateUrl: '/views/main.html'
  })
}
```

```html
<ul class="nav navbar-nav">
  <li ui-sref-active="active"><a ui-sref="main">Home</a></li>
  <li ui-sref-active><a ui-sref="register">Register</a></li>
</ul>
```


### Htmp snippets using bootstarp

For html snippets using bootstrap http://bootsnips.com

### Using ngModel Require

The require:'ngModel' and require:'^ngModel' allow you to inject the model attached to the element or its parent element on which the directive is bound to.

Its basically an easiest way to pass ngModel into the link/compile function instead passing it using a scope option. Once you have access to ngModel, you can change its value using $setViewValue, make it dirty/clean using $formatters, apply watchers, etc.

Below is a simple example to pass ngModel and change its value after 5 seconds.

Demo: http://jsfiddle.net/t2GAS/2/


```js
myApp.directive('myDirective', function($timeout) {
  return {
    restrict: 'EA',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
        ngModel.$render = function() {
            $timeout(function() {
                ngModel.$setViewValue('StackOverflow');  
            }, 5000);                
        };
    }
  };
});
```
