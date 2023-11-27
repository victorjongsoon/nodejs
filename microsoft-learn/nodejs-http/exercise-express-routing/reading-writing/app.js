const express = require('express')
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [];

app.post('/products', function (req, res) {
  // implement
  const newProduct = { ...req.body, id: products.length + 1 }; // create new product
  products = [ ...products, newProduct ]; // add new product to products array
  res.json(newProduct); // return new product in response
});

app.put('/products', function (req, res) {
  // implement
  let updatedProduct; // declare variable to hold updated product
  products = products.map((product) => { // loop through products
    if (product.id === req.body.id) { // find product to update
      updatedProduct = { ...product, ...req.body }; // update product
      return updatedProduct; // return updated product
    }
  })
  res.json(updatedProduct); // return updated product in response
});

app.delete('/products/:id', function (req, res) {
  // implement
  const deletedProduct = products.find((product) => product.id === parseInt(req.params.id)); // find product to delete
  products = products.filter((product) => product.id !== parseInt(req.params.id)); // delete product from products array 
  res.json(deletedProduct); // return deleted product in response
});

app.get('/products', (req, res) => {
  // implement
  res.json(products);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
  