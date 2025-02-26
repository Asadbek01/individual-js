const users = [
	{
		name: 'Asadbek',
		age: '24',
		isAdmin: true,
		familyMembers: ['banan', 'olam', 'orange'],
	},
	{
		name: 'Abdurauf',
		age: '24',
		isAdmin: false,
		familyMembers: ['banan', 'olam', 'orange'],
	},
	{
		name: 'Duryodbek',
		age: '24',
		isAdmin: false,
		familyMembers: ['banan', 'olam', 'orange', 'aplle'],
	},
];

function getFamilyMemebers() {
	console.log(users);
	users.forEach(item => {
		console.log('item members', item.familyMembers);
		console.log(
			'item members',
			item.familyMembers[item.familyMembers.length - 1]
		);
	});
}

getFamilyMemebers();

// getData(users);
// function getData(param) {
// 	param.forEach(obj => {
// 		console.log(obj);
// 	});
// }

// function declaration
function postData() {
	console.log('Function declaration');
}
postData();

//function expression
// getData1();

const getData1 = function () {
	console.log('Function expression');
};

// Arrow function =>
// getData2();
let getData2 = () => {
	console.log('Arrow function');
};

// console.log(b);
// var b = 3;

// // console.log(c);
// const c = 5;

// console.log(d);
// // let d = 9;

//  2 ta o'zgaruvchi kk va uni yigindisini yarmini topishim kk.

let num1 = 2;
let num2 = 1;

let result;

// if (result > 3) {
// 	console.log('true');
// } else {
// 	console.log('false');
// }

// result > 3 ? console.log(true) : console.log(false);
let num = 8;

// num ? console.log('Bor') : console.log('Yoq');
num && console.log('Bor');
