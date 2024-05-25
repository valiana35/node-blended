import fs from "fs/promises";
import { DB_PATH } from "../constants/path.js";

const getExpensiveProducts = async () => {
    try {
        const data = await fs.readFile(DB_PATH, "utf-8");
        const products = JSON.parse(data);
        const PRICE = 500;
        const productsArr = products.filter(({ price }) => price > PRICE);
        console.table(productsArr);
    } catch (error) {
        console.log(error);
    }
};

getExpensiveProducts();
