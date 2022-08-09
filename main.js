// console.log("hello JS!");

/*console.error("hello JS!");
console.warn("hello JS!");*/

//! Переменные - именованное хранилище данных
// let, var, const

// console.log(birth);
// const birth = "03.05.2006";
// console.log(birth);
// console.log(birth);
// birth = "03.05.2005";

// console.log(lastName);
// let lastName = "Pavlova";
// console.log(lastName);
// lastName = "Pirogova";
// console.log(lastName);

// console.log(firstName);
// var name = "Anna";
// console.log(firatName);
// firstName = "Elena";
// console.log(firstName);

//! Название переменных,
//! так нельзя
// Нельзя ставить цифру в начало
// зарезервированные слова нельзя исрользовать
// lest 5blok =''
// let let
// let first name
// let first-name

//! так можно
// let camalCase
// let color_orage
// const RED = "#gww1313";
// const $blok ="";
// const number10 =10;

// ! типы данных
//  1 string
// let str = "srtochka";
// console.log(str.length);
// console.log(str);
// const typeOfstr = typeof str;
// console.log(typeOfstr);

// console.log(typeof str);

// let str1 = "gwe";
// let str2 = "asd";
// let str = `zxc`;

// 2 Number

// let num1 = 100;
// const PI = 3.14;
// console.log(typeof num1);

// 3 boolean
// const bool1 = true;
// const bool2 = false;

// 4 null -специальная пустата
// let error = null;

// 5 undefined
// let hello;
// console.log(hello);

// 6 object (object, array)
// let user = {
//   name: "Diana Kim",
//   age: 20,
// };
// console.log(user.name);
// console.log(user.age);

// console.log(user["name"]);

// array
// let arr = [false, 100, true, {}, "hello"];
// console.log(arr.length);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);

// 7 symbol
// let id = Symbol("r567u");

// 8 bigInt
// let int = 341212121n;

//! Math operators
// console.log(1 + 5);
// console.log(5 - 2);
// console.log(10 / 2);
// console.log(10 * 10);
// console.log(2 ** 3);
// console.log(10 % 7);

//! -,/,*
// console.log("10" / "2")

//! NaN -> Not A Number
// console.log("hello" / 2);

// ! +
// ! concat -> слияние
// console.log("10" + "2");
// console.log(10 + "2");
// console.log("10" + 2);

// ! true-false значения
// console.log(Boolean(0)); //false
// console.log(Boolean(-1)); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("hello")); //true
// console.log(Boolean("")); //false

// ! сравнение
// ! строгое === (тип данных и значение должны быть равны)
// console.log(3 === 5); //false
// console.log(3 === 3); //true
// console.log(3 === "3"); //true
// console.log(3 !== 5); //true

// ! нестрогое === (значения должны быть равны)
// console.log(3 == 3); //true
// console.log("3" == 3); //true
// console.log("3" !== 3); //false

// ! >,<, =
// console.log(3 < 5); //true
// console.log(5 < 3); //false
// console.log(4 >= 4); //true
// console.log(4 <= 4); //true

// ! из string в number
// let elem = "100000kjhfbv";
// console.log(elem);
// console.log(+elem);

// ! parseInt
// let elem2 = "1000000rgkrgjfk";
// console.log(parseInt(elem2));

// ! parseFloat
// let elem3 = "100.2000werevfd";
// console.log(parseFloat(elem3));

// ! Number
// let elem4 = "10000";
// console.log(Number(elem4));

// ! из number в string
// let num = 8990;
// console.log(num);
// console.log(num.toString());
// console.log(String(num));

// ! alert, prompt, confirm
// alert("Hello, user!");
// let firstName = prompt("Как вас зовут?");
// console.log(firstName);
// интерполяция - встроенное выражение
// alert(`${firstName}, welcome!`);

// let value = confirm("Вам есть 18!");
// console.log(value);

let num1 = prompt("введите первое число");
let operators = prompt("введите математ. оператор");
let num2 = prompt("введите второе число");
let result = eval(num1 + operators + num2); // "2 +2"
alert(result);
