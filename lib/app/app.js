// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});

phonecatApp.
  component('greetUser', {
    template: 'Hello, {{$ctrl.user}}!',
    controller: function GreetUserController() {
      this.user = 'world';
    }
  });

  // Register `phoneList` component, along with its associated controller and template
  phonecatApp.
component('phoneListTest', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
  template:
      '<ul>' +
        '<li ng-repeat="phone in $ctrl.phones">' +
          '<span>{{phone.name}}</span>' +
          '<p>{{phone.snippet}}</p>' +
        '</li>' +
      '</ul>',
  controller: function PhoneTestListController() {
    this.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
  }
});

angular.module('phonecatApp', []);
angular.module('phoneList', []);
