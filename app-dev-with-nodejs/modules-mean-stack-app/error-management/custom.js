function customError(message){
    this.constructor.prototype.__proto__ = Error.prototype; // initialize __proto__
    Error.captureStackTrace(this, this.constructor); // capture stack trace
    this.name = this.constructor.name; // set our function’s name as error name.
    this.message = message; // set the error message
}

function checkNumber(num) {
    try {
        if (num > 10) {
            throw new customError("num cannot be greater than 10"); // error is raised
        } else {
            console.log("num is less than 10");
        }
    } catch (error) {
        console.log(error.name + ": " + error.message);
    }
}

checkNumber(15);
checkNumber(9);