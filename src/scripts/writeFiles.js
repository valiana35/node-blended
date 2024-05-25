import fs from "fs/promises";
import { DB_PATH } from "../constants/path.js";
import path from "node:path";

const writeFiles = async () => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    const products = JSON.parse(data, null, 2);
    products.forEach((product, index) => {
      const currPath = path.join(
        process.cwd(),
        "src",
        "files",
        `${index + 1}.json`
      );
      fs.writeFile(currPath, JSON.stringify(product));
    });
  } catch (error) {}
};

writeFiles();
