import fs from "fs/promises";
import { DB_PATH } from "../constants/path.js";

const getTotalPrice = async () => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    const products = JSON.parse(data, null, 2);
    const totalPrice = products.reduce((acc, { price }) => (acc += +price), 0);
    console.log(totalPrice);
  } catch (error) {
    console.log(error);
  }
};

getTotalPrice();
