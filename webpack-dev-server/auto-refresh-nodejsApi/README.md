### 安装依赖
	$ npm install
 
### 执行命令
	$ npm run watch

这时，直接访问：http://localhost:8085 . 如果修改 app.js ，浏览器会自动刷新。

*Note: *执行 webpack-dev-server 的时候，设置的 output.path 没有作用，要是想设置子路径的话，可以设置 output.publicPath。
