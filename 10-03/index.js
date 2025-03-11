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

const submitBtn = document.getElementById('submit-button');
const nameTag = document.getElementById('name-input');
const emailTag = document.getElementById('email-input');
const ageTag = document.getElementById('age-input');

console.log(nameTag);
submitBtn.addEventListener('click', () => {
	//   (? &&) // opertors //

	if (nameTag.value == '' || emailTag.value == '' || ageTag.value == '') return;
	// console.log('Name: ', nameTag.value);
	// console.log('Email: ', emailTag.value);
	// console.log('Age: ', ageTag.value);

	const obj = {
		name: nameTag.value,
		age: ageTag.value,
		email: emailTag.value,
	};
	console.log(obj);
});

// DOM -> getElementById, querySelector,

// Vazifalar:

// 1. HTML sahifada 'user-info' ID li div, 'users' class li ro'yxat (ul), va 5 ta <p> teglari mavjud.
// 2. JavaScript yordamida:
//    - 'user-info' ID li elementni toping
//    - 'users' class li barcha elementlarni toping
//    - Barcha <p> teglarini toping
// 3. Natijalarni console.log() orqali ko'rsating
// 4. Har bir usul (getElementById, querySelector, querySelectorAll) ning farqlarini tushuntiring

// 5. inputlarga qiymat kiritilganda, submit tugmasi bosilganda, inputlardagi qiymatlarni consolga chiqaring
// 6. Agar inputlarga qiymat kiritilmagan bo'lsa, consolga "Iltimos, inputlarni to'ldiring" degan xabarni chiqaring
