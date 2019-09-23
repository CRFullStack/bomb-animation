const path = require("path");
require("babel-register"); // transpiler stuff
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // All the js files being used will go here
    app: "./src/index.js",
    print: "./src/print.js"
  },

  output: {
    filename: "[name].bundle.js", // All js files will have this ending
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        // This transpiles all js files by Babel so earlier browsers can read the files
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/, // this allows us to inject/import css into our js files
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // this cleans the output directory of old files
    new HtmlWebpackPlugin({
      template: "./dist/index.html", // use this to keep your html file from being deleted/overwritten
      inject: false // only set this to true if the scripts need to be loaded into your html file. I suggest using it once to get the scripts in the html file, then come back here and set it to false to prevent it from injecting the scripts multiple times
    })
  ],

  stats: {
    // no idea what this does, I might remove it
    colors: true
  },
  devtool: "source-map" // meh, not really needed at this time
};
