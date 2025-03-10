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
