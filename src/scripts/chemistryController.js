(function() {
    'use strict';

    angular
        .module('chemistryApp')
        .controller('chemistryController',chemistryController);

    chemistryController.$inject =  ['$scope', 'chemistryService','$log'];

    function chemistryController($scope,  chemistryService,$log) {
        $scope.elements = [];
        chemistryService.getElements().then(function(data) {
            $scope.elements = data.elements;
            $scope.periodicElement = $scope.elements[0];
            $scope.element = $scope.periodicElement;
            for (var i=0; i<$scope.elements.length; i++) {
                $scope.elements[i].cssForDisplay = determineCSSClassName($scope.elements[i].type);
            }

            return $scope.elements;
          });


        $scope.fullElement = true;

        function determineCSSClassName(elementType) {
            var cssClassName =chemistryService.getCssClassElement(elementType);
            return cssClassName;
        }


    }

})();
