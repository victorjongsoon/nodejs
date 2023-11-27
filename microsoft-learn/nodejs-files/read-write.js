const fs = require("fs").promises;
const { read } = require("fs");
const path = require("path");

async function readFile(){
    try {
        const data = JSON.parse(await fs.readFile("stores/201/sales.json"));
        // \r\n tells JavaScript to append the value to a newline
        await fs.writeFile(path.join("salesTotals/totals.txt"), `${data.total}\r\n`, {
            flag: "a"
        });
    } catch(error){
        console.error(error);
    }
}

readFile();


// totals.json
// 22385.32
// 22385.32