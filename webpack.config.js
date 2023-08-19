const path = require('path');
const port = process.env.port | 7000;
const HtmlWebpackplugin = require('html-webpack-plugin');

module.exports = {

    mode: "development",
    entry: "./src/index.js",
    output:{
        path: path.join(__dirname,'dist'),
        filename: 'output.js',
        //assetModuleFilename: 'images/[name][ext]'
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer:{
        host: 'localhost',
        port: port,
        historyApiFallback:true,
        open: true
    },
    module: {
        rules: [
          {
            test: /\.js|.jsx$/,
            exclude: '/node_modules/',
            use: ["babel-loader"],
          },
          {
            test: /\.css$/,
            exclude: '/node_modules',
            use: ["style-loader","css-loader"],
          },
          {
            test: /\.html$/,
            use:[{
                loader: "html-loader"
               }],
          },
          {
            test: /\.png|.jpeg|.jpg|.svg$/,
            use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: 'images/[name].[ext][query]',
                  },
                },
              ],
            },
        ],
      },
      plugins: [new HtmlWebpackplugin({
        template:'./src/index.html'
      })],

}