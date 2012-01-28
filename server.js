var PORT = 9000;

var net = require('net');
var rl = require('readline');
var client;
var server = net.createServer(function(c) { //'connection' listener
  client = c;
  c.on('data', function(data) {
    console.log('\n# ' + data);
    rl.prompt();
  });
  
  c.setNoDelay(true);
  
  
});
server.listen(PORT, function() { //'listening' listener
  console.log('\nServer bound on port ' + PORT);
  
  rl = rl.createInterface(process.stdin, process.stdout, null);
  rl.prompt();
  rl.on('line', function (cmd) {
    console.log(cmd);
    client.write(cmd);
    rl.prompt();
  });
});