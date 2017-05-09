require('angular');
// require('angular-route');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('../stylesheets/app.css');
require('./components/common/common');

const app = angular.module('appTest', [
	'ui.component.common',
	'ui.router',
	'ui.bootstrap'
]);

app.controller('testApp', ['$scope', function ($scope) {
	$scope.testStr = 'hhhhStr';
}]);

window.app = app;
app.config(config);
app.run(function () {
	console.log('angular run');
});

var routerConfig = require('./routerConfig');
require('./directives/directive');

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config ($stateProvider, $urlRouterProvider) {
	// for any unmatched url, redirect to '/'
	$urlRouterProvider.otherwise('/');

	angular.forEach(routerConfig, obj => {
		console.log(obj);
		$stateProvider
			.state(obj.state, {
				url: obj.url,
				template: obj.template,
				templateUrl: obj.templateUrl,
				controller: obj.controller
			});
	});
}

angular.bootstrap(document, ['appTest']);