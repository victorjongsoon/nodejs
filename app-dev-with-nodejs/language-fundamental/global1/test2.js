function fib(n) {
    if (n <= 1) {
        return n;
    }

    const res = fib(n - 1) + fib(n - 2);
    return res;
}

const f = fib(4);
console.log(f);






