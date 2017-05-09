var contractTemplate = require('./contract.html');

app.controller('contractCtrl', ['$scope', function ($scope) {
	console.log('contract');
}]);

module.exports = {
	template: contractTemplate,
	controller: 'contractCtrl'
}