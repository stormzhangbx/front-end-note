# CleanWebpackPlugin 

[CleanWebpackPlugin is not a constructor](https://www.jianshu.com/p/0e99366ce796)

今天初始化项目时，报了这个一个错
CleanWebpackPlugin is not a constructor，刚开始以为是包下载的问题，重装后发现还是出现这样的问题，翻了官方文档发现用法变了,而中文文档还没有更新过来。

webpack.config.js

之前的用法

```js
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
+ const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    plugins: [
+     new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```

现在的用法

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
const webpackConfig = {
    plugins: [
        /**
         * All files inside webpack's output.path directory will be removed once, but the
         * directory itself will not be. If using webpack 4+'s default configuration,
         * everything under <PROJECT_DIR>/dist/ will be removed.
         * Use cleanOnceBeforeBuildPatterns to override this behavior.
         *
         * During rebuilds, all webpack assets that are not used anymore
         * will be removed automatically.
         *
         * See `Options and Defaults` for information
         */
        new CleanWebpackPlugin(),
    ],
};
 
module.exports = webpackConfig;
```