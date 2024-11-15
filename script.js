import function1 from "./modules/module1.js";
import { function2, function3, data, addTwoNumber } from "./modules/module2.js";

const number1 = 1;
const number2 = 3;

const twoNumbers = addTwoNumber(number1, number2);
console.log(twoNumbers);

console.log(function1());
console.log(function2());
console.log(function3());
console.log(data);
