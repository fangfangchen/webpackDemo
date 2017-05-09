require('./login.css');
const loginTemplate = require('./login.html');

app.controller('loginCtrl', ['$scope', function ($scope) {
	console.log("scope1===");
}]);


const login = {
	template: loginTemplate,
	controller: 'loginCtrl',
	// resolve: {
	// 	load: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
	// 		return $q(resolve => {
	// 			require.ensure([], () => {
	// 				let module = require('./login.controller');

	// 				$ocLazyLoad.laod({name: 'xxx.bg.login'});

	// 				resolve(module.controller);
	// 			})
	// 		})
	// 	}]
	// }
};

module.exports = login;