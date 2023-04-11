function sum(a) {
  return function(b) {
    return a + b;
  };
}

const a = +prompt("Введите число");
const b = +prompt("Введите число");

const result = sum(a)(b);
console.log(result); 