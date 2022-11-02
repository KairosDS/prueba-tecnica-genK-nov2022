const N = 1000;
const arr = Array.from({length: N}, (_, index) => index + 1);
const BODY = document.querySelector("body");

for (let i = 0; i < arr.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = arr[i] + " botón";
    BODY.appendChild(button);

    button.addEventListener("mouseover", () => {
        button.innerHTML = arr[i] + " botóN";
        button.removeEventListener("mouseout", () => {});
    })

    button.addEventListener("mouseout", () => {
        button.innerHTML = arr[i] + " botón";
        button.removeEventListener("mouseover", () => {});
    })
}



