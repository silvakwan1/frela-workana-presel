function spin() {
  const popUp = document.querySelector(".pop-up");
  const roleta = document.querySelector(".roleta-image");
  const audio = document.querySelector(".audio");

  roleta.classList.add("spin");
  audio.play();
  setInterval(() => {
    roleta.classList.add("ganhador");
  }, 2500);
  setInterval(() => {
    audio.pause();
  }, 5000);
  setInterval(() => {
    popUp.classList.add("pop-up-active");
  }, 7500);
}
