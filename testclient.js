var PORT = 9000;
var net = require('net');
var rl = require('readline');

var client = net.connect(PORT, function() { //'connect' listener
  console.log('\nClient connected');
});

client.on('data', function(data) {
  console.log('\n# ' + data.toString());
  rl.prompt();
});

client.setNoDelay(true);

rl = rl.createInterface(process.stdin, process.stdout, null);
rl.prompt();
rl.on('line', function (cmd) {  
  console.log(cmd);
  client.write(cmd);
  rl.prompt(); 
});
