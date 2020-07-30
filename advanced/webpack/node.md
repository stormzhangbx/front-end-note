# webpack

[Webpack 4 和单页应用入门](https://github.com/wallstreetcn/webpack-and-spa-guide)

[手摸手，带你用合理的姿势使用webpack4（上）](https://segmentfault.com/a/1190000015919863)

## 1 [bundle 分析(bundle analysis)](https://www.webpackjs.com/guides/code-splitting/#bundle-%E5%88%86%E6%9E%90-bundle-analysis-)

[官方分析工具](http://webpack.github.io/analyse/)
对于webpack4，执行`.\node_modules\.bin\webpack-cli --json > stats.json`会在根目录生成stats.json文件，导入到分析工具就可以进行boudle分析了

分离CSS，以便在生产环境中节省加载时间
[ExtractTextWebpackPlugin](https://www.webpackjs.com/plugins/extract-text-webpack-plugin/)
