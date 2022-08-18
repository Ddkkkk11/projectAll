const {
    response
} = require("express");
const {
    request
} = require("express");
// 引入express

const express = require("express");

//创建应用对象

const app = express();

// 3. 创建路由规则
//request 是对请求报文的封装
//response 是对相应报文的封装
app.get('/server', (request, response) => {

    //设置响应头        //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");


    //设置响应体
    response.send("hello Ajax-111");

});
//POST
//all 表示可以接受任意类型的请求
app.get('/json-server', (request, response) => {

    //设置响应头        //设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个数据
    const data = {
        name: "xdd",

    };
    //对data进行转换 吧对象转换为字符川
    JSON.stringify(data);
    //send只能发送字符串类型和buff类型的数据
    //设置响应体
    // response.send(`hello Ajax JSON ${JSON.stringify(data)}`);
    response.send(JSON.stringify(data));

});
//针对ie缓存规则
app.get('/ie', (request, response) => {

    //设置响应头        //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应体
    response.send("hello IE");

});
//延时响应
app.get('/delay', (request, response) => {

    //设置响应头        //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    setTimeout(() => {
        //设置响应体
        response.send(" 延时响应");
    }, 2000)


});

//监听端口 启动服务
app.listen(8000, () => {
    console.log("服务已经启动,8000端口监听中");

});