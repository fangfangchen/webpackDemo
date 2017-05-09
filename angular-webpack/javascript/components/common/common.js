require('./button/button');
require('./radio/radio');

angular
	.module('ui.component.common', [
		'ui.component.common.button',
		'ui.component.common.radio'
	]);