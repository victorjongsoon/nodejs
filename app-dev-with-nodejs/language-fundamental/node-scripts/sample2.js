var i = "data1"; // global variable

function fun2() {
    var i = "data2"; // local variable
    console.log(i);
}

fun2(); // local variable
console.log(i); // global variable