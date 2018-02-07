function LeakingClass() {
}

var leaks = [];
setInterval(function() {
	for (var i = 0; i < 1e6; i++) {
		leaks.push(new LeakingClass);
	}
}, 100);
setInterval(function() {
	const used = process.memoryUsage().heapUsed / 1024 / 1024;
	console.log(`The script uses approximately ${used} MB`);
	console.error('Leaks: %d', leaks.length);
}, 1000);
