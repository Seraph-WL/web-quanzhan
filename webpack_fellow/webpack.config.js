const path = require("path");  //导入path模块
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const glob = require("glob");
const PurifyCSSPlugin = require("purifycss-webpack");
const entry = require("./webpack_config/entry");
const { index } = require("./webpack_config/entry");

module.exports = {
  mode:"development",  //开发环境  生产环境为production
  //入口文件
  // entry:entry,
  entry,
  //出口文件
  output:{
    path:path.resolve(__dirname,"dist"), //当前的绝对路径  path.resolve:合并当前的地址  __dirname:获取当前相对路径的地址  打包到dist文件夹下
    filename:"[name].js", //与入口文件同名 只负责入口文件
    publicPath:"http://127.0.0.1:8081/"  //任何外部文件都相对于他进行引用的
  },
  //插件
  plugins:[
    new HtmlPlugin({
      minify:{
        removeAttributeQuotes:true  //对html文件进行压缩，去掉属性的双引号
      },
      hash:true,  //有效避免缓存js
      template:"./src/index.html"  //要打包的HTML模板路径和文件名称
    }),
    new ExtractTextPlugin("css/main.css"), //css放入想要放到的文件 放在dist文件夹里
    new webpack.ProvidePlugin({
      $:"jquery"
    }),
    new PurifyCSSPlugin({
      paths:glob.sync(path.join(__dirname,"./src/*.html"))
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/, //检测文件类型 看能否被某个loader识别 以css结尾的文件
        // use:['style-loader','css-loader']  //用什么loader解析，顺序反了会报错
        use:ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:[{
            loader:"css-loader",
            options:{importLoaders:1}
          },"postcss-loader"]
        })
      },
      {
        test:/\.(png|jpg|gif)$/,  //匹配图片文件的后缀名称
        use:[ //指定使用的loader和loader的配置参数
          {
            loader:"url-loader", 
            options:{
              limit:500,  //把小于500B的文件打成Base64的格式，写入CSS
              outputPath:"images/", //出口文件
              esModule:false //要不然无法打包
            }
          }
        ]
      },
      {
        test:/\.(htm|html)$/,
        loader:"html-withimg-loader"
      },
      {
        test:/\.scss$/,
        // use:["style-loader","css-loader","sass-loader"] //该css无法分离
         //该css分离为dist里单独一个文件
        use:ExtractTextPlugin.extract({
          use:["css-loader","sass-loader"],
          fallback:"style-loader"
        })
      },
      {
        test:/\.js$/,
        use:[{
          loader:"babel-loader",
          options:{
            presets:['@babel/preset-env']
          }
        }],
        exclude:"/node_modules/" //不能对该文件下的js文件进行转译
      }
    ]
  },
  //配置webpack开发服务功能
  devServer:{
    // 设置基本目录结构
    contentBase:path.resolve(__dirname,"dist"),
    // 服务器的ip地址 也可写localhost
    host:"127.0.0.1",
    // 服务压缩是否开启
    compress:true,
    // 配置服务端口号
    port:"8081",
    open:true
  }
}