// function param kutsin va u paramni logga olsin

function logTitle(param) {
	console.log(param);
}

// Savollar ->

// 1 savol:
// Bizga bitta funksiya kk, nomi getSecret() bo'lsin secret nomli o'zgaruvchuni log da olsin.

// 2 savol:
// getSecret o'zida bitta param kutsin va u paramni valuesini yangilasin

// 3 savol:
// name  surname middleName=> alohida o'zgaruvchiga olib uni concetination qiling.

// 4 savol:
// 3 ta param kutadigan function create qiling. Unga tepadagi o'zgaruvchilarni log oling.

// 5 savol:
// avarage ni topadigan funkiya yasang. Bu un bizga bitta funksiya va param kk bo'ladi.

// -------------------------------------------------Yechimlar -------------------------------------------------
logTitle(
	'------------------------------------------------1-YECHIM-------------------------------------------------'
);
const b = '10';
function getSecret1(secret) {
	console.log(secret);
}

getSecret1(b);

logTitle(
	'------------------------------------------------2-YECHIM-------------------------------------------------'
);
function getSecret(param) {
	param = 'new secret';
	console.log(param);
}
getSecret('secret');

const name1 = 'Duryodbek';
const surname = 'Tursunboyev';
const middleName = 'Xolmurodovich';
logTitle(
	'------------------------------------------------3-YECHIM-------------------------------------------------'
);
function getMyName(ism1, ism2, ism3) {
	console.log(`${ism1} ${ism2} ${ism3} `);
}

getMyName(name1, surname, middleName);
const num1 = 20;
let avarage = num1 / 2;
// console.log(avarage);
logTitle(
	'------------------------------------------------5-YECHIM-------------------------------------------------'
);
function findAvarage(num) {
	console.log(num / 2);
}

findAvarage(33);

logTitle(
	'------------------------------------------------Yangi dars-------------------------------------------------'
);

// ternary operator
let num = 6;

num ? console.log('Bor') : console.log('Yoq');
num && console.log('hey');

// function declaration
myFunction();
function myFunction() {
	console.log('tepadagi func');
}

// function expression
const myFunc = function () {
	console.log(2 + 2);
};
myFunc();

var myArrowFunc = () => {
	console.log(2 + 2);
};
myArrowFunc;
logTitle(
	'------------------------------------------------Keywords-------------------------------------------------'
);
console.log('style ulash turlari');
console.log('script ulash turlari');
console.log('V8 engine va node farqi');
console.log('function turlari');
console.log('function declarion');
console.log('function expression');
console.log('ternaryni ikki xil toifasi (? va &&)');

logTitle(
	'------------------------------------------------Vazifalar-------------------------------------------------'
);

// 1 html css va js ni ulab welcome messageni consolega oling.
// 2 htmlda bodyni ichida script tag ochib u yerda 2 ta o'zgaruvchi yarating va uni yigindisini consoleda ko'rsating
// 3. Bizga bitta allowed degan funksiya kk va u o'zida param kutadi va paramni tekshiradi 18 dan katta yoki kichik.
// 4. Function expression ni ishlamasligini ko'rsating oldin chaqirib va tushuntirib bering.
// 5 Bizga 1 ta o'zgaruvchi kk  va uni qiymatini && operator bilan tekshirib agar (qiymat bo'lsa) bor deb consoleda ko'rsating
