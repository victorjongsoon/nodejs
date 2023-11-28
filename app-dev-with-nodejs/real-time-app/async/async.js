var fs = require('fs');
var async = require('async');

function loadFile (path, callback) {
    var f;
    async.waterfall([
        function (cb) { // cb is the callback function
            fs.open(path, 'r', cb); // open file for reading
        },
        // the handle was passed to the callback at the end of
        // the fs.open function call. async passes ALL params to us
        function (handle, cb) {
            f = handle;
            fs.fstat(f, cb); // get stats of the file e.g., size
        },
        function (stats, cb) {
            var buffer = Buffer.alloc(stats.size);
            if (stats.isFile()) {
                fs.read(f, buffer, 0, stats.size, null, cb); // if the file is a regular file (not directory), read its content into a buffer
            } else {
                callback(make_error("not_a_file", "Can't load directory")); // if the file is a directory, throw an error
            }
        },
        function (bytesRead, buffer, cb) {
            fs.close(f, function (err) { // close the file
                if (err) {
                    cb(err);
                } else {
                    cb(null, buffer.toString('utf8', 0, bytesRead)); // convert the buffer to string
                }
            });
        },
        // called after all functions have finished, or then there is a error
        function (err, fileContent){
            callback(err, fileContent);
        }
    ])
}

loadFile('test.txt', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

function make_error(err, msg) {
    var e = new Error(msg);
    e.code = err;
    return e;
}