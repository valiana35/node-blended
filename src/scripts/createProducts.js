import fs from "fs/promises";
import { DB_PATH } from "../constants/path.js";
import { createFakeProduct } from "../utils/createFakeProducts.js";

export const createProducts = async (amount) => {
  try {
    const products = await fs.readFile(DB_PATH, "utf-8");
    const parseProducts = JSON.parse(products);
    for (let i = 0; i < amount; i += 1) {
        parseProducts.push(createFakeProduct());
    }
    await fs.writeFile(DB_PATH, JSON.stringify(parseProducts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

createProducts(5);
