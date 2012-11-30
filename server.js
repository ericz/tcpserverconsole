var PORT = process.argv[2] || 8090;

var net = require('net');
var rl = require('readline');
var client;
var server = net.createServer(function(c) { //'connection' listener
  client = c;
  c.on('data', function(data) {
    
    
    console.log(data.toString());
    rl.prompt();
  });
  
  c.setNoDelay(true);
  console.log("\nNew client connected");
  rl.prompt();
});
server.listen(PORT, function() { //'listening' listener
  console.log('\nServer bound on port ' + PORT);
  
  rl = rl.createInterface(process.stdin, process.stdout, null);
  rl.prompt();
  rl.on('line', function (cmd) {
    console.log(cmd);
    var outstr = Buffer( cmd );
    //utstr.writeUInt32BE(Buffer.byteLength(cmd), 0);
    client.write(outstr);
    rl.prompt();
  });
});