const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Puedes agregar más reglas aquí para procesar otros tipos de archivos si es necesario
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "/src/index.html",
    }),
  ],
};
