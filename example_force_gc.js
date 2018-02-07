// node --expose-gc
setInterval(()=>{
	let arr = Array(1e6).fill("TehranJS");
	const used = process.memoryUsage().heapUsed / 1024 / 1024;
	console.log(`The script uses approximately ${used} MB`);
},1000)
setInterval(()=>{
	forceGC();
},10000)
function forceGC(){
	if (global.gc) {
		global.gc();
	} else {
		console.warn('No GC hook! Start your program as `node --expose-gc file.js`.');
	}
}