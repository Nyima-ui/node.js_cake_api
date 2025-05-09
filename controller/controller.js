import { getAll, getById, addCake, updateCake } from "../model/model.js";
import { getPostData } from "../utils/utils.js";

export const getAllCake = async (req, res) => {
  try {
    const data = await getAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Data not found" }));
  }
};

export const getCakeById = async (req, res, id) => {
  try {
    const data = await getById(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Cake not found" }));
  }
};

export const addCakeData = async (req, res) => {
  try {
    let body = await getPostData(req);
    const { name, price, description, allergens, type } = JSON.parse(body);
    const cake = {
      name,
      price,
      description,
      type,
      allergens,
    };

    const cakeData = await addCake(cake);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(cakeData));
  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Cake not found" }));
  }
};

export const updateCakeData = async (req, res, id) => {
  try {
    const data = await getById(id);
    const body = await getPostData(req); 
    const { name, price, description, allergens, type } = JSON.parse(body);
    const cake = {
      name: name || data.name,
      price: price || data.price,
      description: description || data.description,
      type: type || data.type,
      allergens: allergens || data.allergens,
    };
  console.log("does it get here")
    const updatedCakeData = await updateCake(id, cake);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(updatedCakeData));
  } catch (error) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Cake not found" }));
  }
};
