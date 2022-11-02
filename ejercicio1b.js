// Ejercicio 1-b

let button = document.createElement('button');
let span = document.createElement('span');
let buttonText = "1 botón"

button.addEventListener('mouseover', (event) => span.innerHTML = "1 botóN");
button.addEventListener('mouseout', (event) => span.innerHTML = "1 botón");
span.innerHTML = buttonText
button.appendChild(span);
document.body.append(button);


