ZipZipTop is a nodejs modules which relies on [jszip](http://stuk.github.io/jszip/). It allows to simply add files & recursive folder in a zip.

## Installation
    $ npm install zip-zip-top

## Examples
```js
var fs = require("fs");
var ZipZipTop = require("zip-zip-top");

var zip = new ZipZipTop();
//add text
zip.file("hello.txt", "Hello World！");

//write zip data to disk
zip.writeToFile("text.zip", (err) => {
	if(err) {
		console.error(err);
	}
});


//add folder
var zip2 = new ZipZipTop();
var jsFolder = zip2.folder("js");
jsFolder.file("hello.js", console.log("hello world"));

//get a stream to handle events your way
zip2.getStream().pipe(fs.createWriteStream("folder.zip"))
.on("end", () => {
	console.log("done");
};


//add file
var zip3 = new ZipZipTop();
zip3.addFile("main.js", (err) => {
	if(err) {
		console.log(err);
	}
	zip3.writeToFile("file.zip", (writeErr) => {
		if(writeErr) {
			console.error(writeErr);
		}
	});
});

//zip a folder
var zip4 = new ZipZipTop();
zip4.zipFolder("../myfolder", (err) => {
	if(err) {
		console.log(err);
	}
	zip4.writeToFile("folder.zip", (err) => {
		if(err) {
			return console.log(err);
		}
		console.log("Done");
	});
});

//zip a folder and change folder destination name
var zip6 = new ZipZipTop();
zip6.zipFolder("../myfolder", () =>{
if(err) {
		console.log(err);
	}
	zip6.writeToFile("myfolder.zip", (err) => {
		if(err) {
			return console.log(err);
		}
		console.log("Done");
	});
}, {rootFolder: "newRootFolder"});


//write to file sync
//zip.writeToFileSync(filePath);
```

## Contributing

This is a **very simple** project made for my personal needs. If you feel like coding some missing features,
I would be glad to work with you.
Suggestions and/or pull requests are welcome! 

## License
MIT
