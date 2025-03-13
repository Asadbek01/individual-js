console.log('Lorem');

// id bilan
// class
// tag

// getElementById
// vs
// querySelector

// const h1 = document.getElementById('user-name');
// h1.addEventListener('click', (e, param) => {
// 	e.target.innerText = 'Azamjonov';
// 	console.log();
// });

// console.log(h1);
// // document.ge
// const queryAllH1 = document.querySelectorAll('h1');
// console.log(queryAllH1);

// // 3- funksiya anonim funksiya

// () => {
// 	console.log('Anonim');
// };

// h1.addEventListener('mouseover', (e) => {});

// submit events
// const submit = document.querySelector('submit-button');
// const submitBtn = document.getElementById('submit-button');
// const nameTag = document.getElementById('name-input');
// const emailTag = document.getElementById('email-input');
// const ageTag = document.getElementById('age-input');

// console.log(nameTag);

// submitBtn.addEventListener('click', () => {
// 	//   (? &&) // opertors //
// });

// DOM -> getElementById, querySelector,

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

// closures
const obj = {
	name: 'Azamjon',
	age: 22,
	isTrue: true,
};

const secret = '1234';
function getSecret() {
	return {
		updateSecret: param => {
			param = '435345345';
		},
	};
}

let secretObj = getSecret();
console.log(secretObj.updateSecret(secret));

// Closures -> outer function -> inner function
// callback => function ozida param sifatida function return qilish setTimeOut(()=> {}, 10000)

// function setTime(param1, param2) {}

// setTime(getData, 1000);

// function getData() {
// 	console.log('hey');
// }

const allLists = document.querySelectorAll('#li-elemnent');
allLists.forEach((value, index) => {
	value.addEventListener('click', e => {
		if (index == 0) {
			e.target.innerText = '1-Element';
		} else if (index == 1) {
			e.target.innerText = '2-Element';
		} else if (index == 2) {
			e.target.innerText = '3-Element';
		}
	});
});
// allLists[1].addEventListener('click', e => {
// 	e.target.innerText = 'Changed';
// 	console.log(e.target.innerText);
// });
console.log(allLists[1]);
