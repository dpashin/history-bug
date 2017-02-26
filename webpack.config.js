var webpack = require('webpack');
console.log(__dirname);
module.exports = {
	entry: __dirname + '/index.js',
	output: {
		filename: 'bundle.js'
	}
};
