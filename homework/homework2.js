const body = document.body;

function handleWindowResize() {
  if (innerWidth >= 1000) {
    body.className = "background-color__yellow";
  } else if (innerWidth <= 600) {
    body.className = "background-color__blue";
  } else if (innerWidth > 600 || innerWidth < 1000) {
    body.className = "background-color__purple";
  }
}

window.addEventListener("resize", handleWindowResize);
