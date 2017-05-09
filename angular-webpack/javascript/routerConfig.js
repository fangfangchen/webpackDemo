module.exports = config = [
	{
		state: 'index',
		url: '/',
		...require('../page/index/index')
	},
	{
		state: 'login',
		url: '/login',
		...require('../page/login/login')
	},
	{
		state: 'contract',
		url: '/contract',
		...require('../page/contract/contract')
	}
];