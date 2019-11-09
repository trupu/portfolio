const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {};

config.entry = {
    app: './src/app.js'
};

config.output = {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
};

config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
}

config.module = {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader'
        },
        { 
            test: /\.pug$/,
            oneOf: [
                {
                  resourceQuery: /^\?vue/,
                  use: ['pug-plain-loader']
                },
                {
                  use: ['pug-loader']
                }
              ]
        },
        {
            test: /\.(scss|sass)$/,
            oneOf: [
                {
                    resourceQuery: /^\?vue/,
                    use: ['vue-style-loader', 'css-loader', 'sass-loader']
                },
                {
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                }
            ]
        },
        {
            test: /\.mp3$/,
            loader: 'file-loader'
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                loader: 'image-webpack-loader',
                options: {
                    disable: true, // webpack@2.x and newer
                },
                },
            ],
        }
    ]
}

config.plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.pug',
    }),
    new ExtractTextPlugin({
        filename: '[name].css'
    }),
    new VueLoaderPlugin()
];

module.exports = config;