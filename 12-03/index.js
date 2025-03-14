const secret = '1234';
function getSecret() {
	return {
		updateSecret: param => {
			param = '435345345';
			console.log(param);
		},
	};
}

let secretObj = getSecret();
secretObj.updateSecret(secret);

// const allLists = document.querySelectorAll('#li-elemnent');
// allLists.forEach((value, index) => {
// 	value.addEventListener('click', e => {
// 		if (index == 0) {
// 			e.target.innerText = '1-Element';
// 		} else if (index == 1) {
// 			e.target.innerText = '2-Element';
// 		} else if (index == 2) {
// 			e.target.innerText = '3-Element';
// 		}
// 	});
// });
// allLists[1].addEventListener('click', e => {
// 	e.target.innerText = 'Changed';
// 	console.log(e.target.innerText);
// });

// const arr = [
// 	{},
// 	'Duryodbek',
// 	23,
// 	true,
// 	['tennis', 'football', { name: 'Duryodbek' }],
// 	{ name: 'Asadbek', age: 23 },
// ];

// const obj = {
// 	name: 'Duryodbek',
// 	age: 23,
// 	isMarried: true,
// 	hobbies: ['tennis', 'football'],
// 	friend: {
// 		name: 'Asadbek',
// 		age: 23,
// 	},
// };

// const slicedArray = arr.slice(0, 5);
// console.log(slicedArray);

// Keywords

// Closures -> outer function -> inner function
// callback => function ozida param sifatida function return qilish setTimeOut(()=> {}, 10000)
// iteration  -> elements iteration [<li></>li>]
// array methods -> .forEach((val, index)), .push(), .shift(), pop(), .slice()

// Vazifalar:

// 1. HTML sahifada 'user-info' ID li li-element id bering
// 2. JavaScript yordamida:
//    - 'user-info' ID li elementni toping
//    - 'users' class li barcha elementlarni toping
//    - Barcha <p> teglarini toping
// 3. Natijalarni console.log() orqali ko'rsating
// 4. Har bir usul (getElementById, querySelector, querySelectorAll) ning farqlarini tushuntiring

// 5. inputlarga qiymat kiritilganda, submit tugmasi bosilganda, inputlardagi qiymatlarni consolga chiqaring
// 6. Agar inputlarga qiymat kiritilmagan bo'lsa, consolga "Iltimos, inputlarni to'ldiring" degan xabarni chiqaring

// Vazifalar: 12-03

// 1-savol
const arr = [
	{},
	'Duryodbek',
	23,
	true,
	['tennis', 'football', { name: 'Duryodbek' }],
	{ name: 'Asadbek', age: 23 },
];
arr[4][2]['name'] = 'Tursunboev';

console.log(arr);

// arr.forEach((item, index) => {
// 	// console.log(`${index}: type is ${typeof item}`);
// });

// Topshiriq:
// Arraydagi har bir elementning turi (type) ni aniqlang va ularni konsolga chiqaring.
// Arraydagi 4-indeksdagi arrayning 2-elementidan (obyektidan) "name" qiymatini oling va uni o'zgartiring.

// 2-savol.
const obj = {
	name: 'Duryodbek',
	age: 23,
	isMarried: true,
	hobbies: ['tennis', 'football'],
	friend: {
		name: 'Asadbek',
		age: 23,
	},
};

// Topshiriq:
// Obyektga yangi "education" property qo'shing, unga obyekt sifatida qiymat bering: { university: "TUIT", year: 4 } // dynamic bo'lishligi kk
// "friend" obyektiga yangi "hobbies" kaliti qo'shing va unga array sifatida kamida 2 ta hobbi kiriting.  // dynamic bo'lishligi kk

// 3- savol.
const car = {
	brand: 'Toyota',
	model: 'Camry',
	year: 2020,
	features: ['ABS', 'sunroof', 'bluetooth'],
	owner: {
		name: 'Anvar',
		age: 35,
	},
};

// Topshiriq:
// 1. car obyektiga dinamik tarzda yangi 'price' property qo'shing va unga qiymat bering
// 2. owner obyektiga dinamik tarzda 'address' property qo'shing va unga qiymat bering
// 3. car obyektining barcha property va qiymatlarini konsolga chiqaring

// 4-savol
// Topshiriq:
// 1. Ikki sonni qo'shuvchi oddiy funksiya yozing
// 2. Yuqoridagi funksiyani arrow function ko'rinishida qayta yozing
// 3. Parametr sifatida array qabul qilib, uning elementlarining yig'indisini qaytaruvchi funksiya yozing. // extra

// 5-savol
// funksiya kk param bilan

// param o'zida array of numbers saqlasin

let arr1 = [1, 2, 3, 4];
let arr2 = [];
const sum = param => {
	param.forEach(elem => arr2.push(elem * 2));
};

sum(arr1);

console.log(arr2);

// for and map
