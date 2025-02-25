function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

// Example usage:
const hello = createHelloWorld();
console.log(hello());