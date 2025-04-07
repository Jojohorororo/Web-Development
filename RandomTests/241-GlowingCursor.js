document.addEventListener("mousemove", (event) => {
    let mouseX = event.clientX - 20;
    let mouseY = event.clientY - 20;

    let element = document.querySelector(".glowing");

    element.style.left = mouseX + "px";
    element.style.top = mouseY + "px";
});
