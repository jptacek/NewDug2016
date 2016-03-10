(function() {
    'use strict';

    angular
        .module('chemistryApp')
        .service('chemistryService',chemistryService);

        chemistryService.$inject= ['$http','$log','$q'];

    function  chemistryService($http,$log,$q) {
        return {
            getCssClassElement: getCssClassElement,
            periodicElements: [],
            getElements: getElements
        };

        function getCssClassElement(elementType) {
            var cssClass = '';
            elementType = elementType.toLowerCase();
            cssClass = elementType;
            switch (elementType) {
                case 'metalloids':
                    cssClass = 'metalloids';
                    break;
                case 'alkali metal':
                    cssClass = 'alkaliMetal';
                    break;
                case 'non metal':
                    cssClass = 'nonMetal';
                    break;
                case 'noble gas':
                    cssClass = 'nobleGas';
                    break;
                case 'halogen':
                    cssClass = 'halogen';
                    break;
                case 'alkaline earth':
                    cssClass = 'alkalineEarth';
                    break;
                case 'poor metal':
                    cssClass = 'poorMetal';
                    break;
                case 'rare earth metal':
                    cssClass = 'lathanoids';
                    break;
                case 'transition metal':
                    cssClass = 'actinoids';
                    break;
                case 'alkaline earth metal':
                    cssClass = 'poorMetal';
                    break;
            }
            return cssClass;
        }
        function getElements() {
          return $http.get('scripts/chemistryData.json')
            .then(getChemistryComplete)
            .catch(function(message) {
                exception.catcher('XHR Failed for getData')(message);
                $location.url('/');
            });

            function getChemistryComplete(data, status, headers, config) {
              return data.data;
            }
      }

    }
})();
