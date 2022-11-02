let btn = document.querySelector("button");

btn.addEventListener("mouseover", function() {
 	this.textContent = "1 botón N";
})
btn.addEventListener("mouseout", function() {
 	this.textContent = "1 botón";
})