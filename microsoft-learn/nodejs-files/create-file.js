const fs = require("fs").promises;
const path = require("path");

const pathToFile = path.join(__dirname, "greeting.txt");


async function createFile() {
    // create the salesTotal directory if it doesn't exist
    try {
        await fs.writeFile(pathToFile, String());
    } catch {
        console.log(`${pathToFile} already exists.`);
    }
}

createFile();
