var test = require('tape');

var hexip = require('../')

test("works?",function(t){

  var ip = hexip("4433320A");
  t.equals(ip,"10.50.51.68",'should have right ip')

  var l = hexip.long("4433320A");
  t.equals(171062084,l,"to long should work")

  var hex = hexip.hex(l);
  t.equals(hex,"4433320A","to hex should convert long to hex")

  hex = hexip.hex("10.50.51.68");
  t.equals(hex,"4433320A","to hex should convert ip to hex")

  t.end();
})
