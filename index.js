import http from "http";
import { getCakes, getCakeById } from "./controller/controller.js";

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    getCakes(res, res);
  } else if (req.url.match(/^\/item-\d{3}$/)) {
    const id = req.url.split("/")[1];
    getCakeById(req, res, id);
  } else if(req.url === "/" && req.method === 'POST'){
     
  }
    else {
    res.writeHead(404, { "Content-Type" : "application/json" });
    res.end(JSON.stringify({ message: "Route not found." }));
  }
});

server.listen(PORT, () => {
  console.log(`Server successfully running at PORT ${PORT}`);
});
