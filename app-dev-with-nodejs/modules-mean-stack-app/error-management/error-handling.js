function myFunction(num){
    if(num > 5){
        throw new Error("num cannot be greater than 5");
    } else {
        console.log("num is less than 5");
    }
}

myFunction(10);
myFunction(2);