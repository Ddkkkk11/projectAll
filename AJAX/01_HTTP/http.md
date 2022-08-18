##HTTP (hypertext transport protocol)协议『超文本传输协议』﹐协议详细规定了浏览器和万维网服务器之间互相通信的规则。约定，规则


## 请求报文(请求)
    重点是格式和参数

    请求报文包括四部分
    行      post /url  HTTP 1.1 
    头      HOST :baidu.com
            cookie ：name :"xdd"
            user_agent:chrome83
    空行        
    体  (如果是个get请求 是空的 如果是post 可以不为空)
        username=admin&password=admin


##相应报文(请求)
``` 
行  HTTP1.1 (协议版本)  200(响应状态码) ok (响应状态字符串)    
头  content-Type:text/html;charset=utf-8
    content-length =2048
    content-encoding:gzip
空行
体  <html>
    <head>
    </head>
     <body>
     <h1>
     </h1>
    </body>
</html>

```