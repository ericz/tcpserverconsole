var PORT = 9000;

var net = require('net');
var rl = require('readline');

var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  c.on('data', function(data) {
    console.log('# ' + data);
  });
  
  
  
});
server.listen(PORT, function() { //'listening' listener
  console.log('Server bound on port ' + PORT);
  
  rl = rl.createInterface(process.stdin, process.stdout, null);
  rl.prompt();
  rl.on('line', function (cmd) {
    
    console.log();
    rl.prompt();
  });
});