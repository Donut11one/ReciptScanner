// All this three lines bellow are importings
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// Here goes all configuration
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  //THIS IS JUST TO RESOLVE SOME EXENSIONS
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // apply to all JS files
        exclude: /node_modules/, // exclude all files on node_modules
        use: {
          loader: "babel-loader", // looks at .babelrc
        },
      },
      // NEW RULE TO HANDLE TS-LOADER
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader',   // Turns CSS into CommonJS
          'sass-loader',  // Compiles Sass to CSS
          'postcss-loader' // For Tail
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // create a template to start from
    }),
  ],
  devServer: {
    host: "localhost", // where to run
    historyApiFallback: true,
    port: 3000, //given port to exec. app
    open: true, // open new tab
    hot: true, // Enable webpack's Hot Module Replacement
  },
};
