const fs = require("fs").promises;
const path = require("path");

const pathToCreate = path.join(__dirname, "stores", "201", "newDirectory");


async function createDirectory() {
    // create the salesTotal directory if it doesn't exist
    try {
        await fs.mkdir(pathToCreate);
    } catch {
        console.log(`${pathToCreate} already exists.`);
    }
}

// recursive flag
/*
async function createDirectory() {
    try {
        await fs.mkdir(path.join(__dirname, "newDir", "stores", "201", "newDir"), {
            recursive: true
        });
        console.log("Directory created at: " + path.join(__dirname, "stores", "201", "newDir"));
    } catch (error) {
        console.error(error);
    }
} 
*/

createDirectory();
