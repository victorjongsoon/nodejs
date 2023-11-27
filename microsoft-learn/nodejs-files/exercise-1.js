const fs = require("fs").promises;
const path = require("path");

async function main() {
    const salesFiles = await findSalesFiles("stores");
    console.log(salesFiles); // [ 'stores/201/sales.json', 'stores/203/sales.json' ]
    console.log(__filename); // full path to the file
    console.log(__dirname);  // full path to the directory
    console.log(path.join("stores", "201")); // stores/201
    console.log(path.extname("sales.json")); // .json
    console.log(path.parse("stores/201/sales.json")); // { root: '', dir: 'stores/201', base: 'sales.json', ext: '.json', name: 'sales' }
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
                await findFiles(`${folderName}/${item.name}`);
            } else {
                // make sure the discovered file is a sales.json file
                if (item.name === "sales.json") {
                    // add the file to the salesFiles array
                    salesFiles.push(`${folderName}/${item.name}`);
                }
            }
        }
    }
    await findFiles(folderName);
    return salesFiles;
}

main();