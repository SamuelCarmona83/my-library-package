import { greet, MyLibrary, version } from 'my-library';

console.log(greet("Alice")); // Should output: "Hello, Alice!"
const instance = new MyLibrary();
console.log(instance.sayHello()); // Should output: "Hello from MyLibrary!"
console.log(`Library version: ${version}`);

