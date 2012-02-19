var flow = require('nimble');

flow.series([
	function (callback) {
		console.log('first');
		callback();
	},
	function (callback) {
		console.log('second');
		callback();
	},
	function (callback) {
		console.log('third');
		callback();
	}
	]
)