const http = require('http');
const express = require('express');
const app = express();
const port = 8080;
app.use("/", express.static(__dirname + '/docs/.vuepress/dist'));
// 创建服务端
http.createServer(app).listen(port, function () {
    console.log('static server running at:');
    console.log('http://localhost:' + port);
});