/**
	* usage：导出为word文档
	* Author: fangfang Chan
	* Time: 2017年05月08日
**/

var $ = require('jquery');
window.jQuery = $;
window.saveAs = require('../libs/FileSaver').saveAs;
require('../libs/jquery.wordexport');

app.directive('exportToWord', function () {
	return {
		restrict: 'E',
		template: '<button class="btn btn-danger">导出文档</button>',
		transclude: true,
		replace: true,
		link: function (scope, element, attrs, ctrl) {
			var exportScope = attrs.exportscope;
			var filename = attrs.filename;
			element.bind('click', function () {
				$('#' + exportScope).wordExport(filename);
			});
		}
	};
});