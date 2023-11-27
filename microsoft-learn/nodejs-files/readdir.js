const fs = require("fs").promises;

// async arrow function
const readDirectory = async () => {
    try {
        const items = await fs.readdir("stores");
        console.log(items); // [ 201, 202, sales.json, totals.txt ]
    } catch (error) {
        console.error(error);
    }
};

// async function expression
/*
async function readDirectory() {
    try {
        const items = await fs.readdir("stores");
        console.log(items); // [ 201, 202, sales.json, totals.txt ]
    } catch (error) {
        console.error(error);
    }
} 
*/

// determine content type
async function readDirectoryWithContentType() {
    try {
        const items = await fs.readdir("stores", { withFileTypes: true });
        for (let item of items) {
            const type = item.isDirectory() ? "folder" : "file";
            console.log(`${item.name}: ${type}`);
            // 201: folder, 202: folder, sales.json: file, totals.txt: file
        }
    } catch (error) {
        console.error(error);
    }
}

// recursive function
async function findFiles(folderName) {
    const items = await fs.readdir(folderName, { withFileTypes: true });
    items.forEach((item) => {
        if (item.isDirectory()) {
            // this is a folder, so call this method again and pass in
            // the path to the folder
            findFiles(`${folderName}/${item.name}`);
        } else {
            console.log(`Found file: ${item.name} in folder: ${folderName}`);
        }
    });
}

readDirectory();
readDirectoryWithContentType();
findFiles("stores");
