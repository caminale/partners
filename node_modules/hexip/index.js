
module.exports = function(hex){
 var bytes = 4
  , out = []
  , b = new Buffer(hex,'hex');
  while(bytes > 0) out.push( b[(bytes--)-1] );
 
  return out.join('.');
}

// compatable with the ip modules fromLong method 
module.exports.long = function(hex){
  var b = new Buffer(hex,'hex');
  return b.readUInt32LE(0);
}

module.exports.hex = function(n){
  var b = new Buffer(4);
  var t = typeof n;

  if(t == "number") {
    b.writeUInt32LE(n,0);
  } else if(t == "string"){
    var octets = n.split('.');
    // take the first and write it last.
    while(octets.length) b[octets.length-1] = octets.shift()
  } else {
    return false;
  }

  return b.toString('hex').toUpperCase();
}

module.exports.port = function(hex){
  var b = new Buffer(hex,'hex');
  return b.readUInt16LE(0);
}

