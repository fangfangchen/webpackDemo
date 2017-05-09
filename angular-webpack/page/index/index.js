require('./index.css');

var indexTemplate = require('./index.html');

app.controller('indexCtrl', ['$scope', function ($scope) {
	console.log('index');
}]);

module.exports = {
	template: indexTemplate,
	controller: 'indexCtrl'
};