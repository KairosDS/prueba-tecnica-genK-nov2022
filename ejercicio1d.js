const N = 1000;
const arr = Array.from(Array(N), (_, index) => index + 1);

for (i = 0; i < arr.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = arr[i] + " botón";
    document.body.appendChild(button);
}


