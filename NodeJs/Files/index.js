//* Default Import
// const math = require('./math');
// console.log(math.add(1, 2));
// console.log(math.hello());

//* ES-6 Import
import { add, hello } from './math.js';
import { writeFile } from './fileHandling.js';
console.log(writeFile);
console.log(add(3, 4));
console.log(hello());