// const card = document.getElementById('card');

// const img = document.createElement('img');
// img.src =
// 	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&s';
// img.alt = 'nature-img';
// // img.className = 'card-img-top'; // 1
// img.classList.add('card-img-top'); // 2

// const cardBody = document.createElement('div');
// const ulElement = document.createElement('ul');

// cardBody.className = 'card-body';

// const h5 = document.createElement('h5');
// const p = document.createElement('p');
// const button = document.createElement('button');
// h5.classList.add('card-title');
// p.className = 'card-text';
// button.className = 'btn btn-primary';

// h5.innerText = 'Bu dynamic card';
// p.innerText = 'lorem Ips lorem ';
// button.innerText = 'Add card';
// cardBody.appendChild(h5);
// cardBody.appendChild(p);
// cardBody.appendChild(button);

// card.appendChild(img);
// card.appendChild(cardBody);
// card.appendChild(ulElement);
// console.log(card);

const parentDiv = document.getElementById('parentDiv');

// <nav class="navbar bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//   </div>
// </nav>

const nav = document.createElement('nav');
const div = document.createElement('div');
const a = document.createElement('a');

nav.className = 'navbar bg-body-tertiary';
div.classList.add('container-fluid');
a.className = 'navbar-brand';
a.href = '#';

a.innerText = 'Navbar';
div.appendChild(a);
nav.appendChild(div);
parentDiv.appendChild(nav);

// const button = document.createElement('button');
// //   innertext
// button.innerText = 'Click me!';
// button.classList.add('btn btn-primary');

// parentDiv.appendChild('button');
