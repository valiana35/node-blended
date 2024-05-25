import fs from "fs/promises";
import path from "node:path";
const readFolder = async () => {
  try {
    const filesDir = path.join(process.cwd(), "src", "files");
    const filesNames = await fs.readdir(filesDir);
    console.log(filesNames);
  } catch (error) {
    console.log(error);
  }
};

readFolder();
