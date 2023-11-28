var fs = require('fs');
var Step = require('step');

try {
    Step(
        function readData() { 
            fs.readFile('data.txt', 'utf8', this); 
        },
        function modify(err, text) {
            if (err) throw err;
            return text + ' Singapore';
        },
        function writeData(err, text) {
            if (err) throw err;
            fs.writeFile('data_output.txt', text, this);
        })
} catch (err) {
    console.error(err);
}