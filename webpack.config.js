const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

console.log('process.argvprocess.argvprocess.argvprocess.argv', process.env.ENV_TYPE)

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: { // 第三方模块配置规则
    rules: [
      {
        test: /\.js|jsx$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        },
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.stylus$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre' // 预处理
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            // 当加载的图片小于limit时，会直接用url-loader将图片的格式编译成base64格式的
            // 当加载图片大于limit时，需要使用file-loader来编译，并且打包到dist文件夹下面
            options: {
              limit: 16000,
              name: 'img/[name].[hash:8].[ext]' // 对打包后的图片命名进行相关的处理，表示在dist文件夹下建一个img文件夹保存图片，同时图片的名字是原来的名字加上8位hash值，再加上图片的扩展名
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
        options: {
          limit: 16000,
          name: 'img/[name].[hash:8].[ext]' // 对打包后的图片命名进行相关的处理，表示在dist文件夹下建一个img文件夹保存图片，同时图片的名字是原来的名字加上8位hash值，再加上图片的扩展名
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html' // 生成的内存中首页的名称
    }),
    new webpack.DefinePlugin({
      'process.env': {
        ENV_TYPE: JSON.stringify(process.env.ENV_TYPE)
      }
    })
  ]
  // module: {
  //     loaders: [
  //     { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude:     /node_modules/ },
  //     { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
  //     { test: /\.css$/, loader: "style!css" },
  //     {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
  //     ]
  // },
  // resolve:{
  //     extensions:['','.js','.json']
  // },
  // plugins: [
  //     new webpack.NoErrorsPlugin()
  // ]
};
