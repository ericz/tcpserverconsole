var PORT = 8090;
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
  var outstr = Buffer( 'xxxx' + cmd );
  outstr.writeUInt32BE(Buffer.byteLength(cmd), 0);
  client.write(outstr);
  rl.prompt(); 
});
