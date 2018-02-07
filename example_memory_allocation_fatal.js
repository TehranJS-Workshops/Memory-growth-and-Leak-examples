let arr = Array(1e8).fill("TehranJS");
let arr2 = Array(1e8).fill("TehranJS");
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);
