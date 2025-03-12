// const secret = '1234';
// function getSecret() {
// 	return {
// 		updateSecret: param => {
// 			param = '435345345';
// 		},
// 	};
// }

// let secretObj = getSecret();
// console.log(secretObj.updateSecret(secret));

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

const arr = [
	{},
	'Duryodbek',
	23,
	true,
	['tennis', 'football', { name: 'Duryodbek' }],
	{ name: 'Asadbek', age: 23 },
];

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

const slicedArray = arr.slice(0, 5);
console.log(slicedArray);

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
