const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

let index = 0;

function updateCounter() {
  counterEl.innerText = index + "%";
  barEl.style.width = index + "%";
  index++;
  if (index < 101) {
    setTimeout(updateCounter, 20);
  }
}


updateCounter();
