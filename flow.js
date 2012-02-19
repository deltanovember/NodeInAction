setTimeout(function () {
	console.log('first');
	setTimeout(function () {
		console.log('');
		setTimeout(function () {
			console.log('last');
		}, 100);
	}, 500);
}, 200);