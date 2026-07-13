function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// testes
fib0 = fibonacci(0)
console.assert(fib0 === 0, `Esperava f(0) = 0, recebeu ${fib0}`);
fib5 = fibonacci(5)
console.assert(fib5 === 5, `Esperava f(5) = 5, recebeu ${fib5}`);
fib10 = fibonacci(10)
console.assert(fib10 === 55, `Esperava f(10) = 55, recebeu ${fib10}`);
fib15 = fibonacci(15)
console.assert(fib15 === 610, `Esperava f(15) = 610, recebeu ${fib15}`);