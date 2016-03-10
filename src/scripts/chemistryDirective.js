(function() {
    'use strict';

    angular
        .module('chemistryApp')
        .directive('periodicChartElement',periodicChartElement);



      periodicChartElement.$inject= ['chemistryService','$log'];

    function periodicChartElement (chemistryService,$log) {
    return {
        restrict: 'E',
        templateUrl: '/templates/periodic-template.html',
        link: function (scope, element, attrs) {
              element.bind('click', function() {
                
                // Change state
                scope.$apply(function(){
                    scope.fullElement = !(scope.fullElement);
                });

            });
            element.bind('mouseover', function() {
                element.css('cursor', 'pointer');
            });
            
        },
        scope:{
            element:'='
        }

    };
    }

})();
