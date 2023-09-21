let a = prompt('Введи число')
let c = prompt('Введите степень')
let f
 
 
 
for (let i = 0; i < 1; i++) {
    f = a ** c
 
    alert('Ответ:' + f);
}










let n = +prompt('Переменная количество')
let m = prompt('Переменная символ отступов')
let b = prompt('Переменная конечный символ')



let les = "";
for (let i = 0; i < n; i++) {
    les += m.repeat(i) + b + "\n";
}

console.log(les);









