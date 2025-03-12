import http from 'node:http';
import fs from 'node:fs';
import qs from 'node:querystring';

const server = http.createServer(function(request, response){

    // GET 방식 
    if(request.method === 'GET'){
        if(request.url === '/' || request.url === '/index.html'){
            const filePath = fs.readFileSync('./index.html')
            response.writeHead(200, {'Content-Type' : 'text/html'}).end(filePath);
        }
    }

    // POST 방식
    if(request.method === 'POST'){
        if(request.url === '/index.html' ){
            const filePath = fs.readFileSync('./index.html')
            response.writeHead(200, {'Content-Type' : 'text/html'}).end(filePath);
            request.on('data', (data) =>{
                console.log(data);
            })
        }
    }

})

server.listen(3000, function(){
    console.log("http://localhost:3000 실행중");
})