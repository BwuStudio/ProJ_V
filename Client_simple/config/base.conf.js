const 
    path = require('path'),
    CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin'),
    HappyPack = require('happypack'),
    assetsPath = (_path) => {
        return path.resolve('./static', _path)
    }

    
module.exports = {
    entry:path.resolve(__dirname, '../src/main'),
    output:{
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js',
        //异步加载的模块是要以文件形式加载，生成的文件名是以chunkFilename配置的
        chunkFilename: 'chunk[id].js?[chunkhash]',
    },
    resolve: {
        modules:[path.resolve(__dirname,'node_modules')],
        mainFields:['jsnext:main','main'],
        alias: { // 路径重命名
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.js', '.json', '.vue', '.scss', '.css'] // 省略后缀名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff|svg|eot|ttf)$/,
                loader: 'url-loader?limit=64',
                options: {
                    //name: '[name].[ext]?[hash]'
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "less-loader" // compiles Less to CSS 
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        hot:true,
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
}
