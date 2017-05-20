hexip
======

translates hex formatted ip addresses to long and dot decimal

this is the format that the linux kernel stores in /proc/net/tcp for example and is probably used in tons of other places

```js

var hexip = require('hexip');

hexip("4433320A") === "10.50.51.68";

hexip.long("4433320A") === 171062084;

hexip.hex(171062084) === "4433320A";

hexip.hex("10.50.51.68") === "4433320A";

```
