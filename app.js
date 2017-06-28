(function(){
  'use strict';//protect from making mistakes

  var app = angular.module('nameCalculator',[]);

  app.controller('nameCalculatorController', function($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function(){
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
    };

    function calculateNumericForString(string){
        var totalStringValue = 0;
        for(var i = 0;i <string.length; i++){
          totalStringValue +=string.charCodeAt(i);
        }
        return totalStringValue;
    };

  });

})();
