// const allLists = document.querySelectorAll('#user-info');

// console.log(allLists);

// allLists.forEach(elements =>
// 	elements.addEventListener('click', e => {
// 		e.target.innerHTML += ` <p>Hello </p>;`;
// 	})
// );

const input = document.getElementById('text');
const submitBtn = document.getElementById('submit-btn');

const ulElement = document.getElementById('ul-element');

submitBtn.addEventListener('click', e => {
	ulElement.innerHTML += `<li>${input.value}</li>`;
});

//  Vazifa

// 2 ta input yarating va submit button yarating. Ordered list uchun alohida elemnt yaratib uni bo'sh qoldiring va scriptda hamma elementni Id bilan oling.

// inputdan kelayotgan Valuelarni alohida elemnga olib browserda Ko'rsating
