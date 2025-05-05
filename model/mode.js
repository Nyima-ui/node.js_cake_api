import cakeData from "../JSON/data.js";

export const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(cakeData);
  });
};

export const findById = (id) => {
  return new Promise((resolve, reject) => {
    const specificCakeData = cakeData.find((item) => item.id === id);
    if(specificCakeData) resolve(specificCakeData);
    else reject(); 
  });
};
