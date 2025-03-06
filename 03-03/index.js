// Function declaration
// getMe();
function getMe() {
	console.log('Ishlayapti funct dec');
}

//  Function expression

const getFuncExp = function () {
	console.log('FuncExp ishlayapti');
};
// getFuncExp();

// Arrow funct
const getArrowFunc = () => {
	console.log('Arrow ishda');
};
// getArrowFunc();

// Array creation
const arr = [
	'olma',
	'banan',
	true,
	2,
	{
		name: 'Abdurauf',
		hobbies: [
			'football',
			'reading',
			{
				audio:
					'https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3',
			},
		],
	},
	'tennis',
];

const arr2 = [
	{
		name: 'Abdurauf',
		hobbies: [
			'football',
			'reading',
			{
				audio:
					'https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3',
			},
		],
	},

	{
		name: 'Asadbek',
		hobbies: [
			'football',
			'reading',
			{
				audio:
					'https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3',
			},
		],
	},

	{
		name: 'Duryodbek',
		hobbies: ['football', 'reading', 'swim', 'run', 'test', 'test2'],
	},
];

// console.log(arr2[2].hobbies.length - 1);

// console.log(arr2[2].hobbies[6 - 1]);

// console.log(arr[4].hobbies[2].audio);

const arrayTask = [
	{},
	{},
	{
		name: 'Test',
		interests: [
			'football',
			'reading',
			{
				name: 'Asadbek',
			},
			{
				name: 'Abdurauf',
				inter: ['olma'],
			},
		],
	},
];

// console.log(arrayTask[2].interests[2]);
// console.log(arrayTask[2].interests[3].inter[0]);

// .forEach()

// const arr7 = [{ name: 'Duryodbek' }, { name: 'Asadbek' }, { name: 'Abdurauf' }];

// arr7.forEach(pass => console.log(pass.name));

const arrofTask = [
	{ name: 'Asadbek', hobbies: ['tennis', 'lorem'] },
	{
		name: 'Abdurauf',
		hobbies: ['football', 'run'],
	},
	{
		name: 'Duryodbek',
		hobbies: ['run'],
	},
];

arrofTask.forEach(param => console.log(param.hobbies[0]));

// Shallow Nusxa
const shallowNusxa = ['olma', 'banan'];
const nusxalanganArray = [...shallowNusxa];

nusxalanganArray[1] = 'uzum';

console.log('Original: ', shallowNusxa);

console.log('Nusxalangan: ', nusxalanganArray);

// Deep Nusxa

// const originalObj = {
//   age: '23',
// };

// const nusxalanObj = { ...originalObj };
// nusxalanObj.age = '25';

// console.log('Original: ', originalObj);

// console.log('Nusxalangan: ', nusxalanObj);

// ------------------------------------Vazifa------------------------------------

// 1) Array ichida 3 element kk va ular object ma'lumot turida bo'lsin. ism, yosh, email adress. // yordam: bunday usulda [{}, {}, {}];

// 2) Va ularni O'zgaruvchiga saqlang va consoleda ko'rsating.

// 3) Har br objectni arraydan tashqariga chiqaring, // (yordam) .forEach dan foydalaning

// 4) Chiqarilgan Objectlarni yosh bo'ylab oling. Misol uchun Agar yosh 18 dan baland bo'lsa, Voyaga yetgan deb consolega oling.
// aks holda (else) voyaga yetmagan deb oling

// 5) Biron bir Object yasab undan deep copy sifatida nusxa oling

// 6) Biron bir Array yasab undan deep copy sifatida nusxa oling

let arr1 = [
	{
		name: 'Abdurauf',
		age: 14,
		email: 'gmail',
	},
	{
		name: 'Duryodbek',
		age: 16,
		email: 'gmail',
	},
	{
		name: 'lorem',
		age: 16,
		email: 'lorem',
	},

	{
		name: 'Asadbek',
		age: 23,
	},
];

const voyagaYetganlar = [];
const voyagaYetmaganlar = [];

arr1.forEach(param => {
	if (param.age > 18) {
		voyagaYetganlar.push(param.name);
	} else {
		voyagaYetmaganlar.push(param.name);
	}
});
console.log('Voyaga yetganlar', voyagaYetganlar);
voyagaYetmaganlar.pop();
console.log('Voyaga yetmaganlar', voyagaYetmaganlar);

let arr3 = ['malibu', 'damas'];

let arr4 = [...arr3];

arr4[0] = 'tico';

console.log(arr3);
console.log(arr4);

const obj = {
	name: 'Asadbek',
	age: 234,
};

// Insert, Delete, Update ->

// Array
let arr9 = ['banan'];
arr9.push('text'); // ["text"]

arr9.shift();

console.log(arr9);

const array = ['football', 'reading', 'swim', 'run', 'test2'];
array.push(); // length 6

// Keywords:
// Array metodlar ->  .push(), .length, .shift(), .pop(), .slice()
// Object metodlari -> property yangilash, o'chirish ....
