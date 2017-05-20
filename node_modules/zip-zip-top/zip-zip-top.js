"use strict";

var util = require("util"),
	async = require("async"),
	path = require("path"),
	fs = require("fs"),
	JSZip = require("jszip");


class ZipZipTop extends JSZip {

	/**
	 * Creates an ZipZipTop object, the representation of a zip file
	 * @constructor
	 */
	constructor() {
		super();
	}

	/**
	 * Adds the given file to this zip
	 * @param{String} filePath relative path to the file to add.
	 * @param {Function} callback takes error & EasZyp object as parameter.
	 * @param {OptionsObject} options options passed to JSZip. base64 & binary field will be overridden.
	 */
	addFile(filePath, callback, options) {
		options = options || {};
		options.base64 = false;
		options.binary = true;

		fs.readFile(path.resolve(filePath), (err, data) => {
			if (err) {
				callback(err, this);
				return this;
			}

			let root = options.rootFolder || "/";
			delete options.rootFolder;

			// We add the file to the zip archive
			this.file(path.join(root, path.basename(filePath)), data, options);
			return callback(null, this);
		});
	}

	/**
	 * Recursively Zip a folder
	 * @param {String} folder rootFolder name to add
	 * @param {function} callback takes err, ZipZipTop as arguments
	 * @param {OptionsObject} options passed to JSZip. "noSymLinks" field added.
	 */
	addFolder(folder, callback, options) {
		if (!fs.existsSync(path.resolve(folder)) || !fs.statSync(folder).isDirectory()) {
			return callback(new Error(`Given '${folder}' doesn't exist or is not a directory.`), this);
		}
		options = options || {};
		options.rootFolder = options.rootFolder || path.basename(folder);

		fs.readdir(folder, (err, files) => {
			if (err) {
				return callback(err, this);
			}
			async.each(files, (item, done) => {
				let subPath = path.resolve(folder, item),
					newOptions = JSON.parse(JSON.stringify(options));

				fs.stat(subPath, (err, stats) => {
					if (err) {
						return done(err);
					}
					if (!stats.isSymbolicLink() || !options.noSymLinks) {
						if (stats.isDirectory()) {
							newOptions.rootFolder = path.join(options.rootFolder, item);
							this.addFolder(subPath, done, newOptions);
						} else if (stats.isFile()) {
							this.addFile(subPath, done, newOptions);
						}
					}
				});
			}, (err) => {
				if (err) {
					return callback(err, this);
				}
				return callback(null, this);
			});
		});
	}

	/**
	 * Writes the current object to the given filePath
	 * @param filePath {string} - path to the file to write
	 * @param compressionLevel {number=} - Compression level, between 1 (best speed) and 9 (best compression). Defaults to 6.
	 * @param callback {function} - Passed to fs.writeFile, can take an Error parameter
	 */
	writeToFile(filePath, compressionLevel, callback) {
		if(!callback && "function" === typeof compressionLevel) {
			callback = compressionLevel;
			compressionLevel = 6;
		}
		
		let options = {
			type: "nodebuffer",
			compression: "DEFLATE",
			compressionOptions: {level: compressionLevel}
		};
		this.generateAsync(options).then((data) => {
			fs.writeFile(filePath, data, "binary", callback);
		});
	}

	/**
	 * Writes the current object to the given filePath
	 * @param compressionLevel {number} - Compression level, between 1 (best speed) and 9 (best compression). Default to 6.
	 * @returns {stream} A stream to write the file
	 */
	getStream(compressionLevel) {
		let options = {
			type: "nodebuffer",
			compression: "DEFLATE",
			compressionOptions: {level: compressionLevel || 6},
			streamFiles: true
		};
		return this.generateNodeStream(options);
	}

	clone() {
		var newObj = new ZipZipTop();
		for (let i in this) {
			if (this.hasOwnProperty(i) && typeof this[i] !== "function") {
				newObj[i] = this[i];
			}
		}
		return newObj;
	}

}
ZipZipTop.prototype.zipFolder = ZipZipTop.prototype.addFolder;
ZipZipTop.prototype.zipFile = ZipZipTop.prototype.addFile;

/**
 * The options accepted by the file() function of JSZip.
 * @see {@link https://stuk.github.io/jszip/documentation/api_jszip/file_data.html}
 *
 * @typedef {{
 * 		date: date,
 * 		compression: string
 * 		compressionOptions: {level: number},
 * 		comment: string,
 * 		createFolders: boolean,
 * 		unixPermissions: number
 * 		dosPermissions: number,
 * 		dir: boolean,
 * 		rootFolder: string,
 *	 	noSymLinks: boolean
 * 	}} OptionsObject
 */

module.exports = ZipZipTop;