const clock = document.querySelector("h2");

function getTime() {
  const xmas = new Date("2024-12-25:00:00:00+0900");
  const today = new Date();
  const dday = xmas.getTime() - today.getTime();
  ddaySeconds = Math.floor(dday / 1000);
  ddayMinutes = Math.floor(ddaySeconds / 60);
  ddayHours = Math.floor(ddayMinutes / 60);
  ddayDays = Math.floor(ddayHours / 24);
  seconds = ddaySeconds % 60;
  minutes = ddayMinutes % 60;
  hours = minutes % 24;

  clock.innerHTML = `${ddayDays}d ${hours}h ${minutes}m ${seconds}s`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
