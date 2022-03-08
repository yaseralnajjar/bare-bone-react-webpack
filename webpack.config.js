const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    compress: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      // Choose ONLY one: first for plain CSS, second for for SASS
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
