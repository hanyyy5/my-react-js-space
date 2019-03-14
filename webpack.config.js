const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: [
              'babel-polyfill',
               path.resolve(__dirname, './src/index.js')
            ],
    // entry: './src/index.js', //相对路径
    output: {
        path: path.resolve(__dirname, 'build'), //打包文件的输出路径
        filename: 'bundle.js' //打包文件名
    },
    module: {
        rules: [ //配置加载器
            {
                test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
                loader: 'babel-loader', //使用的加载器名称
                exclude : /node_modules/,//设置不编译node_modules文件夹中的内容 css-loader和style-loader不会出错
                options: { //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                    presets: ['env', 'react', 'stage-2'],
                }
            }, 
            // {
            //     test: /\.js$/,
            //     enforce: 'pre',
            //     loader: 'eslint-loader'
            // },
            {
                test: /\.(css|scss)$/, 
                // loader: 'style-loader!css-loader', 
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: ()=> [
                                require('autoprefixer'),
                                require('precss'),
                                require('postcss-flexbugs-fixes')
                            ]
                        }
                    }
                ]
            },
            {
                test: [/\.gif$/, /\.jpe?g$/, /\.(png|svg|eot|ttf|woff|woff2)$/],
                loader: 'url-loader',
                options: {
                    limit: 10000,  //1w字节以下大小的图片将自动转成base64
                }
            }
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
       
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'build'), //本地服务器在哪个目录搭建页面
        historyApiFallback: true, //搭建spa应用时非常有用，它使用的是HTML5 History Api，任意的跳转或404响应可以指向 index.html 页面
        inline: true, //支持dev-server自动刷新的配置
        hot: true, //启动webpack热模块替换特性
        port: 8080,
        historyApiFallback: true
    }
    
}