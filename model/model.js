import data from "../JSON/data.js";
import { writeDataToFile } from "../utils/utils.js";
import { v4 as uuidv4 } from "uuid";

export const getAll = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const getById = (id) => {
  return new Promise((resolve, reject) => {
    const cakeData = data.find((cake) => cake.id === id);
    if (cakeData) resolve(cakeData);
    else reject();
  });
};

export const addCake = (cake) => {
  return new Promise((resolve, reject) => {
    const newCakedata = { id: `item-${uuidv4()}`, ...cake };
    data.push(newCakedata);
    writeDataToFile("./JSON/data.js", data);
    resolve(newCakedata);
  });
};

export const updateCake = (id, cake) => {
  return new Promise((resolve, reject) => {
    const index = data.findIndex((c) => c.id === id);
    data[index] = { id, ...cake };
    writeDataToFile("./JSON/data.js", data);
    resolve(data[index]);
  });
};
