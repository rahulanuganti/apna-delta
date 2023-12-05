let p1 = document.createElement('p');
p1.innerText="Hey i'm red!";
document.querySelector('body').appendChild(p1);
p1.classList.add('red');

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").appendChild(h3);
h3.classList.add("blue");

let div = document.createElement("div");
div.classList.add("div");
document.querySelector("body").appendChild(div);

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
document.querySelector("div").append(h1);

let pindiv = document.createElement("p");
pindiv.innerText = "ME TOO!";
document.querySelector("div").appendChild(pindiv);