// All this three lines bellow are importings
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const autoprefixer = require("autoprefixer");

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
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader",
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
            options: {
              sassOptions: {
                // Optional: Silence Sass deprecation warnings. See note below.
                silenceDeprecations: [
                  "mixed-decls",
                  "color-functions",
                  "global-builtin",
                  "import",
                ],
              },
            },
          },
        ],
      },
      {
      test: /\.(png|jpg|jpeg|svg|gif)$/i, 
      type: "asset/resource", 
      },
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
