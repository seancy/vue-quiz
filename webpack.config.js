var path = require('path')
var HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
//var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const LiveReloadPlugin = require('webpack-livereload-plugin');
const { VueLoaderPlugin }= require('vue-loader')

module.exports = {
    mode: 'development', // "production" | "development" | "none"
    entry: {
        app:'./src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'scripts/[name].js',
        //publicPath:'http://192.168.1.7:8080/'
    },
    //watch: true,
    devServer: {
        //hot: true,
        //contentBase: path.join(__dirname, 'dist'),
        contentBase: [ path.join(__dirname, 'assets') ],
        compress: true,
        //host: '192.168.1.7',
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            //presets:['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        //'style-loader',
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true }
                        },
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: true }
                        },
                        {
                            loader: 'sass-loader', options: {
                                sourceMap: true,
                                includePaths: [ 'src/scss' ]
                            }
                        }
                    ]
                })
            },
            {
                test:/\.vue$/,
                include:[path.resolve(__dirname, 'src/js')],
                use:[
                    {loader:'vue-loader'}
                ]
            },
            {
                test: /\.html$/,
                use: [ 'html-loader' ]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            //publicPath: '/abc/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|svg|otf)(\?\S*)?$/,
                loader: 'file-loader',
                include: [ /fonts/, /node_modules/ ],
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            /*{
                test: /\.handlebars$/,
                loader: 'handlebars-loader',
                options: {
                    helperDirs: [ path.join(context.templates, 'helpers') ],
                    partialDirs: [ path.join(context.templates, 'scripts') ]
                }
            }*/
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new LiveReloadPlugin(),
        new CleanWebpackPlugin(['dist'], { beforeEmit: true }),
        /*new CopyWebpackPlugin([
            { from: 'assets', to: 'assets' },
        ], {}),*/

        new ExtractTextPlugin('main.css'),

        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        /*new HTMLWebpackPlugin({
            filename: 'swiper.html',
            template: 'swiper.html'
        })*/
        //new HtmlWebpackInlineSourcePlugin(),
    ]
}
