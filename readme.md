# commands
commands we used:
```bash
kill -SIGUSR1 PID #pid of your node process
node-inspector #you can access your process at runtime 

node --expose-gc app.js #can call the gc in your app
node --max-old-space-size=4096 app.js #change the memory limit in MB
```