function logTitle(param) {
	console.log(
		`------------------------------------------------${param}-------------------------------------------------`
	);
}

console.log('Welcome Message');
// isAllowed(19);

// let isAllowed = function (param) {
// 	if (param >= 18) {
// 		console.log('Allowed');
// 	} else {
// 		console.log('not Allowed');
// 	}
// };

// Function expression

// =>

let functionExpres = () => {
	console.log('hey');
};

functionExpres();
logTitle('24-02-yangi dars');

const fruits = ['olma', 'apple', 'banan'];
// fruits.forEach((item, index) => console.log(index));

const arr = [
	{
		name: 'Asadbek',
		age: '16',
	},
	{
		name: 'Duryodbek',
		age: '24',
		ism: true,
	},
	{
		name: 'Abdurauf',
		age: '18',
	},
];

console.log(arr[2].age);
// arr.forEach((item, index) => console.log(item.ism));

function isAllowed(param) {
	arr.forEach((item, index) => {
		if (item.age >= 18) {
			console.log(`Foydalanuvchi telefondan foydalana oladi: ${item.name}`);
		} else {
			console.log(`yosh yetmaydi: ${item.name}`);
		}
	});
}

isAllowed(arr);

// Keywords:

// function turlari
// ternary turlari
// iteratsiya haqida
// .forEach() -> iteratsiya

logTitle('Vazifalar');

// 1) bitta funksiya ozida arr sifatida param kutsin va uni logga olsin

// 2) tepadagi funksiyaga kiritilagan arrayni index bo'ylab olsin.

// 3) yangi funksiya kk o'zida array of objectlarni param sifatida kutsin va har bir objectni arraydan chiqarsin

const arr4 = ['bir', 1, 2, 3, 4, 5, 6, 7, 8, 10, 11];

// function logArray(param) {
// 	// const uzunligi = arr4.length - 1;

// 	// const oxirgiIndex = arr4[arr4.length - 1];

// 	const birinchiIndex = param[0];

// 	// console.log(oxirgiIndex);
// 	console.log(birinchiIndex);
// }

// logArray(arr4);

const users = [
	{
		name: 'Asadbek',
		age: '24',
		isAdmin: true,
	},
	{
		name: 'Abdurauf',
		age: '24',
		isAdmin: false,
	},
	{
		name: 'Duryodbek',
		age: '24',
		isAdmin: false,
	},
];

getData(users);
function getData(param) {
	param.forEach(obj => {
		console.log(obj);
	});
}

function postData() {
	consolr.log('hey');
}

const getData = function () {};
