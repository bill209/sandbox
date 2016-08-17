var app = angular.module('plunker', []);

app.controller('RootController', function() {
  this.view = 'loading'
//  this.e = {view: 'loading'};
});

app.component('headerComponent', {
  template: `
    <h3>Header component</h3>
    <a class="btn btn-default btn-sm" ng-class="{'btn-primary': $ctrl.view === 'list'}" ng-click="$ctrl.setView('list')">List</a>
    <a class="btn btn-default btn-sm" ng-class="{'btn-primary': $ctrl.view === 'table'}" ng-click="$ctrl.setView('table')">Table</a>
  `,
  controller: function() {
    this.setView = function(view) {
      //this.view = view
      this.onViewChange({'e': {view: view + 'z'}})
    }
  },
  bindings: {
    view: '<',
    onViewChange: '&'
  }
});

app.component('mainComponent', {
  template: `
    <h4>Main component</h4>
    Main view: {{ $ctrl.view }}
  `,
  bindings: {
    view: '<'
  }
});