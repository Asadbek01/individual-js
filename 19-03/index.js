// const parent = document.getElementById('parent');

// // parent.innerHTML += '<h1>Hello world!</h1>';

// // parent.innerHTML += '<h3>Hello world!</h3>';

// const parentChild = document.createElement('div');

// console.log(parentChild);
// let h1 = document.createElement('h1');
// h1.innerText = 'Hello world!';

// // parent.appendChild(h1); // elementni parentga push qiberadi

// console.log(parent);

{
	/* <img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div> */
}

const card = document.getElementById('card');

const img = document.createElement('img');
img.src =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTPuiJmJPHb-4ES2ESNMTU61N2Y1-vANe2w&s';

const cardBody = document.createElement('div');
cardBody.className = 'card-body';

const cardTitle = document.createElement('h5');
cardTitle.className = 'card-title';
cardTitle.innerText = 'Bu card Titlee';

const cardText = document.createElement('p');
cardText.className = 'card-text';
cardText.innerText =
	"Some quick example text to build on the card title and make up the bulk of the card's content.";

card.appendChild(img);

cardBody.appendChild(cardTitle);
cardBody.appendChild(cardText);

card.appendChild(cardBody);
