import { findAll, findById } from "../model/mode.js";

export const getCakes = async (req, res) => {
  try {
    const data = await findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify("No data found", error));
  }
};

export const getCakeById = async (req, res, id) => {
  try {
    const data = await findById(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({message : "Cake not found"}));
  }
};
