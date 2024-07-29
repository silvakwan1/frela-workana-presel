function spin() {
  const popUp = document.querySelector(".pop-up");
  const roleta = document.querySelector(".roleta-image");

  roleta.classList.add("spin");
  setInterval(() => {
    roleta.classList.add("ganhador");
  }, 2500);
  setInterval(() => {
    popUp.classList.add("pop-up-active");
  }, 7500);
}
