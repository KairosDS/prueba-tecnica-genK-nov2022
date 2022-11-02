// Ejercicio 1-c

const addingButtons = (n) =>{
    for (let i = 0; i<10; i++){
        let button = document.createElement('button');
        let span = document.createElement('span');
        let buttonText = `${i+1} botón`
    
        span.innerHTML = buttonText
        button.appendChild(span);
        document.body.append(button);
    }
}

addingButtons(10)



