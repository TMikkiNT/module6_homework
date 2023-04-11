function chislo(arr){
  
let even = 0;
let NOTeven = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zero++;
  } else if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      NOTeven++;
    }
  }
}

console.log('chetnoe kol-vo: ' + even);
console.log('nechetnoe kol-vo: ' + NOTeven);
console.log('String kol-vo: ' + zero);
}
const arr = [5, 15, 34, 0, 37, 44, 122, 'stack', 358, undefined, 999, 37, 88, 11, 33, true, undefined];
chislo(arr);