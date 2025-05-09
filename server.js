import http from "http";
import {
  getAllCake,
  getCakeById,
  addCakeData,
  updateCakeData
} from "./controller/controller.js";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    getAllCake(req, res);
  } else if (req.url.match(/^\/item-\d{3}$/) && req.method === "GET") {
    const id = req.url.split("/")[1];
    getCakeById(req, res, id);
  } else if (req.url === "/" && req.method === "POST") {
    addCakeData(req, res);
  } else if (req.url.match(/^\/item-\d{3}$/) && req.method === "PUT") {
    const id = req.url.split("/")[1];
    updateCakeData(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server successfully running at PORT ${PORT}`);
});
