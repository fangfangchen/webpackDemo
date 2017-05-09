require('./button.css');
var btnTemplate = require('./button.html');

angular
	.module('ui.component.common.button', [])
	.directive('commonButton', ['$timeout', function ($timeout) {
		return {
			restrict: 'E',
			template: btnTemplate,
			transclude: true,
			replace: true,
			link: function (scope, element, attrs, ctrl) {
				console.log('button directive');
				element.addClass(attrs.classname);
			}
		}
	}]);