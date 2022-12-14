const HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      path = require('path');



module.exports = {
    target: 'node',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
      },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.html/i,
                use: [{
                    loader: "html-loader", 
                    options: {
                        minimize: true
                        }
                    },
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./"
                        },
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: ["file-loader?name=assets/[name].[ext]","image-webpack-loader"]
            },
            {
                test: /\.(woff)$/i,
                use: ["file-loader?name=assets/[name].[ext]"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin(),
    ]
}