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
