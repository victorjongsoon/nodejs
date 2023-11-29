var dns = require('dns');

dns.lookup('www.google.com', function onLookup(err, address, family) {
    console.log('address:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
    });
});

dns.lookup('www.yahoo.com', function onLookup(err, address, family) {
    console.log('address:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
    });
});

dns.lookup('www.bing.com', function onLookup(err, address, family) {
    console.log('address=', address);
    console.log('family=', family);
});   

dns.lookup('www.bing.com', function onLookupService(err, port, call) {
    console.log('service=', port);
    console.log('call=', call);
});