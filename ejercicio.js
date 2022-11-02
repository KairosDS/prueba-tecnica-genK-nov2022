// Ejercicio 1-e

const addingButtons = (n) =>{
    for (let i = 0; i<n; i++){
        let button = document.createElement('button');
        let span = document.createElement('span');
        let buttonText = `${i+1} botón`

        button.addEventListener('mouseover', (event) => span.innerHTML = "1 botóN");
        button.addEventListener('mouseout', (event) => span.innerHTML = "1 botón");
        span.innerHTML = buttonText
        button.appendChild(span);
        document.body.append(button);
    }
}

addingButtons(1000);






