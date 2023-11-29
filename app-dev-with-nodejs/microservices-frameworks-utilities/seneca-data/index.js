var seneca = require('seneca')()

seneca.use('basic').use('entity')

// since mem-store is a default plugin, it does not need to be
// added with .use(). You can just go ahead and use it.
seneca.ready(function(){
    var product = seneca.make$('laptop');
    product.name = 'Macbook Pro';
    product.price = 1500;

    product.save$(function(err, product){
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Product name: ' + product.name);
            console.log('Product price: ' + product.price);
        }
    });   
});
