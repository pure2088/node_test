var http = require('http');  
http.createServer(function handler(request, respose) {  
    respose.writeHead(200, {  
        'Content-Type' : 'text/html'  
    });  
    respose.end('Hello World888\n');  
}).listen(8888,'test.node.com');  
console.log("服务器已经启动，地址为：http://test.node.com:8888");
