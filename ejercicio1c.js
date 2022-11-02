var buttons = [0,1,2,3,4,5,6,7,8,9,10];

for (i = 0; i < 11; i++) {
    const button = document.createElement("button");
    button.innerHTML = buttons[i] + " botón";
    document.body.appendChild(button);
}