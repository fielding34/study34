// chrome.app.runtime.onLaunched.addListener(function() {
// 	chrome.appWindow.create('window.html', {
// 		'bounds': {
// 			'width': 400,
// 			'height': 500
// 		}
// 	});
// })
chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('window.html', {
		'bounds': {
			'width': 400,
			'height': 500
		}
	});
});