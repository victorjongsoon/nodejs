const express = require('express')
const app = express()
const port = 3000

const products = [
{
  id: 1,
  name: "Ivanhoe",
  author: "Sir Walter Scott",
},
{
  id: 2,
  name: "Colour Magic",
  author: "Terry Pratchett",
},
{
  id: 3,
  name: "The Bluest eye",
  author: "Toni Morrison",
},
];

app.get('/', (req, res) => res.send('Hello API!'));

app.get("/products/:id", (req, res) => {
    res.json(products.find((product) => product.id === +req.params.id)); // +req.params.id converts string to number
});

// http://localhost:3000/products?page=1&pageSize=2
app.get('/products', (req, res) => {
    const page = +req.query.page; // +req.query.page converts string to number
    const pageSize = +req.query.pageSize; // +req.query.pageSize converts string to number

    if (page && pageSize) { // if page and pageSize are defined
        const start = (page - 1) * pageSize; // page - 1 because page 1 starts at index 0
        const end = page * pageSize; // page * pageSize because page 1 ends at index 9
        res.json(products.slice(start, end)); // slice returns a new array
    } else {
        res.json(products); // if page and pageSize are not defined, return all products
    }

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));