const fs = require("fs").promises;
const path = require("path");

async function main() {
    const salesDir = path.join(__dirname, "stores");

    const salesFiles = await findSalesFiles(salesDir);
    console.log(salesFiles);
}

async function findSalesFiles(folderName) {
    // this array will hold sales as they are found
    let salesFiles = [];

    async function findFiles(folderName) {
        // read all the items in the current folder
        const items = await fs.readdir(folderName, { withFileTypes: true });

        for (item of items) {
            if (item.isDirectory()) {
                // search this directory for files (recursive call)
                await findFiles(path.join(folderName, item.name));
            } else {
                // make sure the discovered file is a sales.json file
                if (path.extname(item.name) === ".json") {
                    // add the file to the salesFiles array
                    await salesFiles.push(path.join(folderName, item.name));
                }
            }
        }
    }
    await findFiles(folderName);
    return salesFiles;
}

main();