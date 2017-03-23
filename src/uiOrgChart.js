(function() {
  'use strict';

  // Define a variable for the module
  var uiOrgChart = angular.module('ui-org-chart', []);

  /** Directive declaration */
  uiOrgChart.directive('uiOrgChart', ['$compile', 'uiOrgChartConfig',
  function ($compile, uiOrgChartConfig) {
    return {
      restrict: 'A',
      replace: false,
      scope: {
        "ngModel": '='
      },
      link: function(scope, element, attrs) {
          // Globals from the attributes
          scope.dataDepth = attrs.depth || 2;

          // Compile the orgchart when the data changes
          scope.$watch('ngModel', function (orgData) {
              $(element).orgchart({
                'data' : orgData,
                'depth': scope.dataDepth,
                'nodeContent': 'title'
              });
          });

      }
    }
  }]);

}());
