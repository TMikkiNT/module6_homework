let a = +prompt("Введите переменную");
let b = +prompt("Введите степень");

const number = (x,n) => {
  const result = x**n;
  return result;
};

console.log(number(a,b));