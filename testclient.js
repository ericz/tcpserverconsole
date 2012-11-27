var PORT = parseInt(process.argv[3], 10) || 8090;
var HOST = process.argv[2] || 'localhost';
var net = require('net');
var rl = require('readline');
console.log(HOST, PORT);
var client = net.connect(PORT, HOST, function() { //'connect' listener
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
  var outstr = Buffer( cmd );
  //outstr.writeUInt32BE(Buffer.byteLength(cmd), 0);
  client.write(outstr);
  rl.prompt(); 
});

