# rc-yaml

rc + YAML - INI = this module 

This module cannibalizes the [**rc**](https://www.npmjs.com/package/rc) module and tries to parse a [YAML](http://yaml.org) "rc" file, in addition to JSON and INI formats.
 
## Key Differences Between this and **rc**
   
- Well, if the "rc" file is not JSON, we try YAML, then fall back to INI.
- Since there's crossover between INI and YAML, we choose YAML if the YAML parser doesn't return a `String` value.  So, if we end up with a `String`, we call it INI.  The end. 

## Usage

```js
var rc = require('rc-yaml');

var config = rc('name', {
  defaults: 'go here'
});
```

Custom parsers are still supported. See [**rc**'s `README.md`](https://github.com/dominictarr/rc/blob/master/README.md) for full usage.

If you just want the parsing function for some reason, it's accessible via:

```js
var parser = require('rc-yaml').parser;
```

## A Note About Peer Dependencies

This module *depends on* the **rc** module, which means installing them both side-by-side is unnecessary.  One or the other, people.

Using `peerDependencies` here may be more politically correct, but at a cost.  Since **rc** is "for lazy people", when in Rome...

## Author, Somewhat

[Christopher Hiller](https://boneskull.com)

## License

MIT

 

