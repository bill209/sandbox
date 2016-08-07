
var parentObj = {
  controller: parent
};
   
var childObj = {
  transclude: true,
  controller: child,
  templateUrl: 'childTpl'
};

var grandChildObj = { 
  scope: {
    msgToChild: '&'  
  },
  templateUrl: 'grandChildTpl',
  controller: grandChild
};

angular
  .module('app', [])
  .controller('appCtrl', appctrl)
  .component('parent', parentObj)
  .component('child', childObj)
  .component('grandChild', grandChildObj)

function parent($scope){
  this.a='parent'; 
}

function child($scope){ 
  this.a = 'child';
  this.test = function(x){
    alert('test');
  }
  this.msgToChild = function(x){
    alert('wooohoo',x);
  }
}

function grandChild($scope){ 
  this.a='grandchild';
  this.sendMsg = function(x){
    this.msgToChild('hi'); 
  }

}

function appctrl($scope){
  $scope.a = 'controller';
}
