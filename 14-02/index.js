// for va map va EventListeners
let arr = [{ age: 23 }, { age: 23 }, { age: 19 }, { age: 10 }];
console.log(arr[arr.length]);

// forEach -> Array yaratib bermaydi
// arr.forEach((value, index) => {
// 	console.log(value);
// });

// // map ->  Array yaratib beradi
// arr.map((value, index) => {
// 	console.log(value);
// });

// callback and closures

for (let i = 0; i < arr.length; i++) {
	if (arr[i].age > 10) {
		console.log(`Voyaga yetganlar: ${arr[i].age}`);
	}
}

// conatiner.innerText = 'Hello';
const usersMockData = [
	{
		name: 'Asadbek',
		age: 12,
	},
	{
		name: 'Abdurauf',
		age: 15,
	},
	{
		name: 'Soliyev',
		age: 20,
	},
	{
		name: 'Duryodbek',
		age: 20,
	},
	{
		name: 'Tursunboev',
		age: 19,
	},
];

// div ochib unga id bering htmlda

// js da uni id bilan oling.

// mockdatani objectdan tashqariga chiqaring.
const conatiner = document.getElementById('container');
const btn = document.getElementById('get-data');
btn.addEventListener('click', () => {
	getData();
});

const getData = () => {
	for (let i = 0; i < usersMockData.length; i++) {
		// console.log(usersMockData[i]);
		if (usersMockData[i].age > 19) {
			conatiner.innerHTML += `<p>Voyaga yetgan bollar: ${usersMockData[i].name}, yoshi: ${usersMockData[i].age}</p>`;
		}
	}
};
// console.log(conatiner.innerText);
