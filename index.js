import http from 'http'; 


const server = http.createServer((req, res) => {
    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, {"Content-Type" : "application/json"}); 
        res.end(JSON.stringify({message : "You are it"}))
    }
})