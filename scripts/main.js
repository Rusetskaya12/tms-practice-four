"use strict";

//task2 - вывести бОльшее число

let height = 15
let width = 20

console.log (Math.max(height,width));


//task1

let a = 'true'
let b = false
let c = 17
let d = undefined
let i = null

console.log (typeof a, b, c, d, i);

//task3

for (let i=1; i<=20; i++) {
    if (i%3==0)
    console.log (i);
}

//task4

let keys = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = keys && documents && pen && (apple || orange);
console.log ('can i go to work?', shouldGoToWork);

//task5

//let yourNumber = prompt ('Enter the number:') 
    
//for (let yourNumber=1; yourNumber <=25; yourNumber++) {

//if (!(yourNumber%5)) {
 //   console.log ('Fiz')
//} else if (!(yourNumber%3)) {
//    console.log ('Buz')
//} else (!(yourNumber%5 || yourNumber%3))
//{
//        console.log ('FizBuz')
//    };
//}

let yourNumber = prompt ('Enter the number:');
    
if (!(yourNumber%5)) {
    alert("Fiz");}
else if (!(yourNumber%3)) {
    alert ("Buz");}
 else if (!(yourNumber%5 && yourNumber%3))
 {
    alert ("FizBuz");
};
//else {
    
//    alert ("noNumber");
//}

//task6
let age = prompt ('How old are you?');
if (age >= 18) {
    console.log ('Попей пивка')
}
else if (age<= 15) {
    console.log ('Пей колу')
}
else if (age>=16 && age <=17) {
    console.log ('Можешь выкурить сигаретку, только маме не говори')
}


//task7 #1
let sideOfTheWorld = prompt ('В какую сторону света ты хочешь улететь?');

if (sideOfTheWorld==='юг') {
    console.log ('на юг пойдешь счастье найдешь')
}
else if (sideOfTheWorld==='север') {
    console.log ('на север пойдешь много денег найдешь')
}
else if (sideOfTheWorld==='запад') {
    console.log ('на запад пойдешь верного друга найдешь')
}
else if (sideOfTheWorld==='восток') {
    console.log ('на восток пойдешь разработчиком станешь')
}
else {
    console.log ('попробуйте еще разок')
};

//task7 #2

let sideOfTheWorld1 = prompt ('В какую сторону света ты хочешь улететь?');
switch (sideOfTheWorld1) {
    case 'север':
        alert ('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        alert ('на запад пойдешь верного друга найдешь');
        break;
    case 'юг':
        alert ('на юг пойдешь счастье найдешь');
        break;
    case 'восток':
        alert ('на восток пойдешь разработчиком станешь');
        break;
    default:
        alert ('попробуйте еще раз')
}

///adv task1

//let name = prompt ('как тебя зовут?');
//const name = "пОлИнА нАбЕрЕжНаЯ"
//console.log(name.toLowerCase);
//const result = name.charAt(0).toUpperCase()+name.slice(1)
//console.lggog(result);

//let yourName="пОлИнА нАбЕрЕжНаЯ";
//alert(yourNamje.toUpperCase());
//let newName = yourName[0].toUpperCase()+yourName.slice(1);
//let newName1 = newName[7].toUpperCase()+newName.slice(8);
//alert(newName1);

let yourName=prompt ('Enter your name');
alert(`Hi,${yourName}`.toLowerCase());


//adv task2
let num1 = prompt('введи число');
let num2 = prompt('сколько отнять');
let num3 = prompt ('сколько прибавить');
let num4 = prompt('сколько умножить');
let num5 = prompt ('на сколько разделить');
//alert(Number(num1)-Number(num2)+Number(num3)*Number(num4)/Number(num5));
alert(`${num1}-${num2}+${num3}*${num4}/${num5} = ${num1-num2+num3*num4/num5}`);


//adv task3

let task = '#';
while (task.length<=7) {
    console.log(task+ "\n");
    task+="#";
}





