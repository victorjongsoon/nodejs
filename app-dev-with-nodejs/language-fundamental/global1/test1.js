console.log("my file is=" + __filename); 
console.log("my directory is=" + __dirname); 
console.log("my directory is=" + process.cwd()); // current working directory


function fun1() {
    console.log("fun1() is called");
    console.log("hello xxxx");
}

// call the function with timeout
setTimeout(fun1, 5000); // 2 seconds