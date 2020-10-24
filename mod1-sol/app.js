(function (){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope']
function LunchCheckController($scope)
{
	$scope.menuItems="";
	$scope.response="";


	function getCount(string){
		var count=0;
		var strarray=string.split(',');
		for (var i = 0; i < strarray.length; i++) {
			strarray[i] = strarray[i].replace(/ /g,'');
        if(strarray[i].length >0) count++;
      }
      return count;
		};
	

	$scope.checkIfTooMuch = function(){
       switch (getCount($scope.menuItems)){
         case 0:
           $scope.response = 'Please enter data first';
          
           break;
         case 1:
         case 2:
         case 3:
           $scope.response = 'Enjoy!';
          
           break;
         default:
           $scope.response = 'Too much!';
          
       }
    };

};
})();
