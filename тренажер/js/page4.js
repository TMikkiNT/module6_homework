const a = +prompt("Введите начальное значение: ");
const b = +prompt("Введите конечное значение: ");

function numbers(a, b) 
{
    let num = a;
    const intervalId = setInterval(() => 
    {
      console.log(num);
      if (num === b) 
      {
        clearInterval(intervalId);
      }
      num++;
    }, 1000);
  }
  
 numbers(a, b);