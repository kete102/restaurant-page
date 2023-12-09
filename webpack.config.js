const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: "html-loader",
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
