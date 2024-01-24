const h1 = document.querySelector(".title h1");

function handleMouseEnter() {
  h1.innerText = "The mouse is here!";
  h1.style.color = "blue";
}
function handleMouseLeave() {
  h1.innerText = "The mouse is gone!";
  h1.style.color = "tomato";
}

function handleWindowResize() {
  h1.innerText = "You just resized!";
  h1.style.color = "teal";
}
function handleMouseContextmenu() {
  h1.innerText = "That was a right click!";
  hi.style.color = "yellow";
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleMouseContextmenu);
