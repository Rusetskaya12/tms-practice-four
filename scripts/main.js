"use strict";

//Task 1 💻

//Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

//```javascript
//    let x = 20
//    let y = 58
//    let z = 42
//

let oneNumber = 20;
let tooNumber = 58;
let threeNumber = 42;
let totalNumber = oneNumber+tooNumber+threeNumber;
console.log(totalNumber);

//Task2
//Создайте переменные:

//    - количество секунд в минуте
//    - количество минут в часу
//    - количество часов в сутках
//    - количество суток в году
    
//Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

let secondsInMinute = 60;
let minutesInAnHour = 60;
let hoursInDay = 24;
let daysYear = 365;
let myAgeInSecond = daysYear*29*secondsInMinute*minutesInAnHour*hoursInDay;

console.log(myAgeInSecond);


//Task 3 💻

//```javascript
//   let count = 42
//    let userName = '42'

// Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.

let count = 42;
let userName='42';

//1 способ
let countFirst = ('' + count);
let userNameFirst = (+ '42');

//2 способ
let counSec = String(42);
let userNameSec = Number(42);


//#### Task 4 💻
//Имеется три переменные:

//```javascript
//  let a = 1
//  let b = 2
//  let c = "белых медведей"

//Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.


let firstNumber = '1';
let secondNumber = '2';
let animal = "белых медведей";
alert(firstNumber +secondNumber+ ' '+animal);
console.log(firstNumber+secondNumber+ ' ' +animal);




let access = 'доступ';
let job = 'морпех';
let water = 'наледь';
let accusation = 'попрек';
let tool = 'рубило';
let lengthWords = access.length + job.length + water.length + accusation.length + tool.length;
alert(lengthWords.length);


//let name="Kate";
//let age= 20;
//let howAreYou=prompt('How are you?');
//alert(`Variable:${name} have type:'string'`);




let name = prompt('Как тебя зовут?');
alert(`Тебя зовут ${name}`);
console.log (name);
let age = prompt('Сколько тебе лет?');
alert(`Тебе ${age} лет`);
console.log(age);



//Поменяйте значение переменных местами не создавая дополнительной переменной:

let first='4';
let second='3';

[first,second] = [second,first];
console.log(first,second);

//В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
//let codeWord5 = (browserType[codeWord1.length-1]);
//codeWord1[codeWord1.length-1];
//console.log(codeWord1.(1));