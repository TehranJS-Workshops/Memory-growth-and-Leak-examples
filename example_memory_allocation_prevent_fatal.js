// # Plain Ol' Node
// node --max-old-space-size=1024 app.js                     # increase to 1gb
// node --max-old-space-size=2048 app.js                     # increase to 2gb
// node --max-old-space-size=3072 app.js                     # increase to 3gb
// node --max-old-space-size=4096 app.js                     # increase to 4gb
// node --max-old-space-size=5120 app.js                     # increase to 5gb
// node --max-old-space-size=6144 app.js                     # increase to 6gb

// # For pm2
// pm2 start app.js --node-args="--max-old-space-size=1024" # increase to 1gb
// pm2 start app.js --node-args="--max-old-space-size=2048" # increase to 2gb
// pm2 start app.js --node-args="--max-old-space-size=3072" # increase to 3gb
// pm2 start app.js --node-args="--max-old-space-size=4096" # increase to 4gb
// pm2 start app.js --node-args="--max-old-space-size=5120" # increase to 5gb
// pm2 start app.js --node-args="--max-old-space-size=6144" # increase to 6gb
let arr = Array(1e8).fill("TehranJS");
let arr2 = Array(1e8).fill("TehranJS");
arr.reverse();
arr2.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);