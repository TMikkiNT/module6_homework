function randomize(n) {
  if (n <= 1 || n > 1000) { 
    console.log("Введено неверное значение или превышено число");
    return;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { 
      console.log("Число " + n + " не является простым");
      return;
    } 
  } 
  console.log("Число " + n + " является простым");
}

randomize(47);
randomize(254); 
randomize(0); 
randomize(1011); 


/* также если использовать рандомные числа, то нам понадобится след. функция:

function randomInt(n) {
  return Math.floor(Math.random() * n);
}
let int = randomInt(1000);
console.log("Выбранное рандомное число: " + int);

randomize(int);
*/