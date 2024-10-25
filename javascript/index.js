let div = document.createElement("div");
let img = document.createElement("img");
let p = document.createElement("p");
// Container
div.className = "container";

// Image
img.src = "../allfiles/Cat.jpg";
img.className = "img";
img.alt = "Cat Image";

// Paragraph
p.innerText = "Cat Image";

// div.appendChild(img);
// div.appendChild(p);

div.append(img, p);
document.body.appendChild(div);
