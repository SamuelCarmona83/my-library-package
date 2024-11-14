const { greet, MyLibrary, version } = require("../../dist/cjs/my-library.cjs");

console.log(greet("Alice")); // Should output: "Hello, Alice!"
const instance = new MyLibrary();
console.log(instance.sayHello()); // Should output: "Hello from MyLibrary!"
console.log(`Library version: ${version}`);

