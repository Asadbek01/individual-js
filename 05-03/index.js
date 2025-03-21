// Funksiya, varaibales, hoisting (ko'tariluvchi) if else, ternary, object, arrays, va array metodlar va object metodlar

// Data types -> Ma'lumot turlari

// String -> "", '', ``
// Numbers -> 1233423
// Boolean -> true/false
// undefined -> undefiend
// null -> null
// Arrays -> []
// object  -> {}

// var // es5

// let, const -> es6
// constant -> o'zgarmas
// console.log(a);
var a = 10;

let b = 10;
const c = 10;
// console.log(a, b, c);

// let vs const

// 1 -farq
b = 11;
// c = 11; // Errror, O'zgarmas bo'lgani un

// 2-farq
let d = 1;
// const e; // qiymat berilishligi kk

//  if else
// console.log(b);
// if (b == 10) {
// 	console.log('Ha teng');
// } else {
// 	console.log('teng emas');
// }

// ternary (? va && )
// b == 10 ? console.log('Ha teng') : console.log('Teng emas');
// d ? console.log('Bor') : console.log('Yoq');
// d && console.log('Bor');

// Objects vs Arrays

// Objects
const obj = {
	name: 'Duryodbek',
	age: '23',
	sinf: 10,
	isMarried: false,
	hobbies: ['tennis', 'football'],
	friend: {
		name: 'Asadbek',
		age: 23,
	},
};

// console.log(obj.name);

// Arrays
let arr = [
	{
		name: 'Duryodbek',
		age: '23',
		sinf: 10,
		isMarried: false,
		hobbies: ['tennis', 'football'],
		friend: {
			name: 'Asadbek',
			age: 23,
		},
	},

	{
		name: 'Duryodbek',
		age: '23',
		sinf: 9,
		isMarried: false,
		hobbies: ['tennis', 'football'],
		friend: {
			name: 'Asadbek',
			age: 23,
		},
	},

	{
		name: 'Duryodbek',
		age: '23',
		sinf: 8,
		isMarried: false,
		hobbies: ['tennis', 'football'],
		friend: {
			name: 'Asadbek',
			age: 23,
		},
	},

	{
		name: 'Abdurauf',
		age: '23',
		sinf: 8,
		isMarried: false,
		hobbies: ['tennis', 'football'],
		friend: {
			name: 'Asadbek',
			age: 23,
		},
	},
	{
		name: 'Duryodbek',
		age: '23',
		sinf: 10,
		isMarried: false,
		hobbies: ['tennis', 'football'],
		friend: {
			name: 'Asadbek',
			age: 23,
		},
	},
];

// arr.forEach(elem => {
// 	if (elem.sinf == 8) {
// 		console.log('8-sinf talabalari', elem);
// 	}
// });

// Aray metodlari:

// Post, Delete , Update (push(), pop(), shift())

const arr1 = [{ name: 'Asadbek' }, 'behi', 'uzum', 'orange', 'olma'];

// Arrayga element jo'natish
// arr1.push({ name: 'Asadbek' });
// arr1.push('behi');
// arr1.push('uzum');
// arr1.push('orange');
// arr1.pop(); // oxirgi elemntni olib tashlash

// arr1.shift(); // birinchi elementni olib tashledi

// .slice(param, param2) => param start index, param end index
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// const slicedElem = arr1.slice(3, arr.length);
// console.log(slicedElem);
// console.log(arr1);

// Function declarition:
function getName() {}

// function expression:
const getFuncExp = function () {};

//  Arrow function
const getArrowFunc = () => {};

// ------------------------------------ Vazifalar ------------------------------------

// 1) Array yarating: bo'sh bo'lsin.
// 2) U arrayni push metodi orqali 5 element bilan to'ldiring.

// 3) Bo'sh Object yarating uni ham .property bilan to'ldiring. name, age, email.

const emptyObj = {};

emptyObj.name = 'Asad';
emptyObj.email = 'gmaail';
emptyObj.age = '23';

emptyObj.name = 'Azamjonov';
console.log(emptyObj);

// 4) To'ldirilgan objectni name propertisini yangilang.

// extra:
// 1)  // 1)  2 ta o'zgaruvchi yasang va ularga qiymat bering. Va qiymatlarni bir biriga qo'shib alohida o'zgaruvchiga oling. Va natijani consolega oling.
// 2)  Tepadagi yaratilgan 2 ta o'zgaruvchini if else bilan tenglang agar teng bo'lsa teng bo'lmasa teng emas.
// 3) 2 savolni ternary bilan qiling.

// 4) getName nomli funksiya yarating va funksiyadan tashqarida name nomli o'zgaruvchi ochib unga qiymat berib va uni getName nomli functionda consolega oling.

// 5) object yarating va unga name, email, address, nomlar va ularga qiymat bering.

// 6)  array yarating va ichiga 6 ta element joylang, misol uchun (mevalar)

// 7) 5 savolda yaratilgan objectdan addressni consolega oling.
// 8) 6 savoldagi yaratilgan arraydan oxirgi elemntni .lenghth bilan oling.
// 9) checkMeva nomli funksiya yarating va uni ichida 6 savoldagi yaratilgan mevalarnini 3-indexini tekshiring. If elsedan foydalaning.

// 4)

// let name = 'Asad';

// function getName() {
// 	console.log(name);
// }
// getName();
