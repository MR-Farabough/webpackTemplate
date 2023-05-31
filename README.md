# Webpack Setup Template

- Initialize package.json

<pre>npm init -y</pre>

- Install webpack-cli

<pre>npm install webpack-cli --save-dev</pre>

- Package.json should look like this

<pre>
{
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
  "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "devDependencies": {
     "webpack": "^5.38.1",
     "webpack-cli": "^4.7.2"
   }
 }
</pre>

> Make sure you have a <code>`./src and ./dist`</code> folder

<code>npx webpack</code>

# For babel

> npm install -D babel-loader @babel/core @babel/preset-env webpack

> This will compile your code from ./src/index.js to ./dist/main.js

# create a <code>webpack.config.js</code>file

> this is not required but better than typing a bunch of commands

<pre>
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
</pre>

- Below the command will run the build again with config file

<code>npx webpack --config webpack.config.js</code>

# NPM scripts

- Your <code>package.json</code> file should look like this

<pre>
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   // The below dependencies are just an example you might have different
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }
</pre>

- and then you can run <code>npm run build</code>

# To automatically run the build use the command

<code>npx webpack --watch</code>

# Webpack with jest

`webpack.config.js`
<pre>
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: ['node_modules'],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.gif$/,
        type: 'asset/inline',
      },
      {
        test: /\.(ttf|eot|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },
};
</pre>

`jest.config.js`
<pre>
odule.exports = {
  modulePaths: ['/shared/vendor/modules'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],

  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',

    '^react(.*)$': '<rootDir>/vendor/react-master$1',
    '^config$': '<rootDir>/configs/app-config.js',
  },
};
</pre>