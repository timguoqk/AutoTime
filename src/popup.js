document.addEventListener("DOMContentLoaded", function(event) {
	var button = document.getElementById('button');
	button.onclick = function() {
		chrome.tabs.executeScript(null, {file: "src/jquery.js"}, function() {
			chrome.tabs.executeScript(null, {file: "src/inject.js"});
		});
	};
});

	