(function() {
    'use strict';

    angular
        .module('chemistryApp')
        .directive('periodicChartDetail',periodicChartDetail);

    periodicChartDetail.$inject= ['chemistryService'];

    function periodicChartDetail (chemistryService) {
    return {
        restrict: 'E',
        templateUrl: './templates/periodic-detail.html',
        scope:{
            element:'='
        }

    };
    }
})();
