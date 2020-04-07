const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["./src/index.ts"],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "assets/index.html"),
    }),
  ],
};
