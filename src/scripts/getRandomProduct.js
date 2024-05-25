import { getRandomNumber } from "../utils/getRandomNumber.js";
import fs from "fs/promises";
import { DB_PATH } from "../constants/path.js";

const getRandomProduct = async () => {
  const data = await fs.readFile(DB_PATH, "utf-8");
  const products = JSON.parse(data, null, 2);

  const randomNumber = getRandomNumber(0, products.length - 1);
  console.log(products[randomNumber]);
  return products[randomNumber];
};

getRandomProduct();
