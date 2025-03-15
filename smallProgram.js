function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let numbers = [];
for (let num = 100; num >= 1; num--) {
    if (isPrime(num)) continue;
    if (num % 3 === 0 && num % 5 === 0) {
        numbers.push("FooBar");
    } else if (num % 3 === 0) {
        numbers.push("Foo");
    } else if (num % 5 === 0) {
        numbers.push("Bar");
    } else {
        numbers.push(num.toString());
    }
    if (num === 1){
        numbers.push("%")
    }
}

console.log(numbers.join(", "));
