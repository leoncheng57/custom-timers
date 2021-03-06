const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pug = {
    test: /\.pug$/,
    use: ['html-loader', 'pug-html-loader']
};

const ts = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /(node_modules)/,
}

const scss = {
    test: /\.(sa|sc|c)ss$/,
    // Loaders are applying from right to left(!)
    use: [
        {loader: MiniCssExtractPlugin.loader},
        {loader: "css-loader"},
        {loader: "postcss-loader"},
        {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
                implementation: require("sass")
            }
        }
    ]
}

const imgs = {
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
        {
            loader: "file-loader",
            options: {
                outputPath: 'images'
            }
        }
    ]
}

const mp3 = {
    test: /\.mp3$/,
    use: [
        {
            loader: "file-loader",
            options: {
                outputPath: 'sounds'
            }
        }
    ]
}

const config = {
    entry: './src/app.ts',
    module: {
        rules: [pug, ts, scss, mp3, imgs]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new LiveReloadPlugin({
            appendScriptTag: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug',
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],
    
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: '[name].js'
    },
    devServer: {
        port: 3000,
    }
};

module.exports = config;