// // Hoisting ko'tariluvchi
// var a;
// a = 'Asadbek'; // es5
// console.log(a);

// console.log(null == undefined);

// const Duryorbek = {
// 	firstName: 'Duryorbek',
// 	lastName: 'Tursunboyev',
// 	age: '18',
// };
// console.log(Duryorbek.age);

// // // console.log('Mening ismim', a);

// let b = 'Duryorbek'; // es6
// b = 'Tursunboyev';

// const c = 'Abdurauf';

// // // c = 'Soliyev';
// // // console.log(c);
// const d = 'Habibullo';

// let togrimi = true; //boolean  true | false

// let num1 = 9;
// num1 = 10;
// let num2 = 3;
// console.log(typeof num2);

// console.log(num1 + num2);
// let natija1 = num1 + num2;
// console.log(natija);

// let g = 3;
// let f = 4;

// let natija2 = g + f;

// // console.log(natija2 == 8);

// // if (natija2 == 8) {
// // 	console.log('Salom bollar');
// // } else {
// // 	console.log('teng emas');
// // }

// // natija2 == 8 ? console.log('Salom bollar') : console.log('teng emas');
// let natija1 = 10;
// if (natija1 == 10) {
// 	const k = 'qiymat';
// 	console.log(k);
// } else {
// 	// console.log(k);
// 	// console.log('False');
// }

// // ternary operator
// natija1 == natija1 ? console.log('True') : console.log('False');
// // tengmi?

// Data type - ma'lumot typelari

// Primitive
// String -> "", '', ``
// number -> 1,2,3,4
// boolean -> true/false
// undefined -> undefined topilmagan
// null -> null ( object )

// None - primitive;
// object -> Object {}
// array -> []  eg: const array = ['apple', 'orange', 'etc']; console.log(array[1]);

const person = {
	name: 'Asadbek',
	age: '23',
	email: 'gamil@azamjonov.com',
	interest: ['football', 'bowling'],
};

const person2 = { ...person };
// person.name = 'Azamjonov';
person2.interest = ['tennis'];
console.log('Person1', person);
console.log('Person2', person2);

// Array spread operator:
const arr = [1, 2, 3];
const arr2 = [...arr];
arr2[2] = 4;

console.log('Array1', arr);
console.log('Array2', arr2);

// ---- Keywords------
// bir vaqt / bitta ish -> js
// var
// let vs const
// data type -> ma'lumot turlari
// ascending -> 0 to 9
// descending -> 9 to 0
// shallow copy a = b
// spread object {...}
// spread array [...]

// array access element arr[3]
// object access property obj.name
// ternary (if else qisqartmasi)
// (to'grimi) -> result == 10 ? "" : ""
// result ? "": ""
// array methods: .push(), .sort()

// 1 Masala:
// var, let, const bilan uchta o‘zgaruvchi e’lon qiling.
// Ularning qiymatini console.log ga chiqarib ko‘ring.

var a = 3;
let v = 3;
const c = 4;

// 2 Masala:
// string, number, boolean, object, array, undefined turidagi ma’lumotlarni o‘z ichiga olgan o‘zgaruvchilar yarating.
// Konsolga ularning turlarini chiqarib ko‘ring (typeof operatoridan foydalaning).

let str = 'Salom';
let num = 7;
let bool = true;
let obj = {
	name: 'abc',
	age: '22',
};

let array = [2, 4, 5];

let undef;

// 3 masala
let numbers = [5, 2, 9, 1, 7];

let sortedNums = numbers.sort();
console.log(sortedNums);
// (ascending) tartibda saralang. (.sort methodidan foydalaning)

// 4-Masala:
// Bir (array) va bir obyekt (object) yarating.
// Ularning nusxalarini (deep copy) olish uchun (...) operatoridan foydalaning va o‘zgarishlarni tekshirib ko‘ring va ikkalasida ham o'zgarganini console.log ga chiqaring.

// Keyin esa huddi shuni oldini olishlik u-n spread operatordan foydalaning va farqini aytib bering
console.log(
	'--------------------------------------- Array ----------------------------'
);

let array1 = [2, 4, 5];
let array1Copy = [...array1];

array1Copy[0] = 100;
array1Copy[2] = 90;

console.log('original array', array1);

console.log('copy array', array1Copy);

console.log(
	'--------------------------------------- Object ----------------------------'
);

const obj1 = {
	name: 'abc',
	age: '23',
};

const obj2 = { ...obj1 };

obj2.age = '0';
console.log('original object', obj1);
console.log('copy qilingan object', obj2);

// 5-masala
// Array yarating va index bilan 2 elemntni console.logda chiqaring.

const array3 = [1, 4, 5, 6];
console.log(array3[1]);

// 6-masala
// Object yarating va undagi bir propertyni console.logda chiqaring.

const obj5 = {
	interests: ['tennis', 'football'],
	age: '23',
};
console.log(obj5['age']);

// 7-masala

let time = new Date().getHours();
let sum9 = 19;
if (time >= 6 && time <= 12) {
	console.log(obj5.interests);
	console.log('morning');
} else if (time > 12 && time <= 18) {
	console.log('afternoon');
} else if (time > 18 && time <= 24) {
	console.log('evening');
} else {
	console.log('notogri vaqt');
}

console.log(
	'--------------------------------------- Funksiya ----------------------------'
);

// function declaration
let sum = 9;
let sum2 = 9;
let result = sum + sum2;

if (result == 18) {
	sayHi('Asadbek');
} else {
	console.log('Uzur tenglama 18 teng emas');
}

function sayHi(p) {
	console.log(p);
}

function pressTime() {}

// keywords
// new Date() -> to'liq sana: 2025-02-17T06:15:59.514Z
// new Date().getDate() => eg: 17
// new Date().getFullYear() => eg: 2025
// new Date().getHours => eg: 11
// function scope
// global scope
// block scope

// function declaration

const names = ['Duryodbek', 'Abdurauf'];

function logNames(index_2) {
	console.log(index_2);
}

logNames(names[1]);

// bitta object age nomli property olsin.

// funksiya nomi getAge va bitta param olsin. Consolda objectni age olsin
const fruits = ['olma', 'banan', 'uzum'];

function getThirdElement(param) {
	console.log(param);

	console.log('param', param[0]);
}

getThirdElement(fruits);

// Secret function

const name1 = 'Duryodbek';
const surname = 'Tursunboyev';
// let secret = 'dsadasd';
// function getSecret() {
// 	console.log(secret);
// }

// getFullName();

function getSecret(param) {}

getSecret(secret);

// Keywords:

// function skelet =>   function nom(){}
// parameterli function => nom(param)
// length => uzunlik un eg: array va string
// concatenation -> string join qilishlik un 2ta usul

// Savollar ->

// 1 savol:
// Bizga bitta funksiya kk, nomi getSecret() bo'lsin secret nomli o'zgaruvchuni log da olsin.

// 2 savol:
// getSecret o'zida bitta param kutsin va u paramni valuesini yangilasin

// 3 savol:
// name  surname middleName=> alohida o'zgaruvchiga olib uni concetination qiling.

// 4 savol:
// 3 ta param kutadigan function create qiling. Unga tepadagi o'zgaruvchilarni log oling.

// 5 savol:
// avarage ni topadigan funkiya yasang. Bu un bizga bitta funksiya va param kk bo'ladi.
