function spin() {
  const popUp = document.querySelector(".pop-up");
  const roleta = document.querySelector(".roleta-image");
  const roulette = document.querySelector("#roulette");
  const success = document.querySelector("#success");

  roleta.classList.add("spin");
  roulette.play();

  setTimeout(() => {
    roleta.classList.add("ganhador");
  }, 2500);

  setTimeout(() => {
    roulette.pause();
  }, 5000);

  setTimeout(() => {
    success.play();
    popUp.classList.add("pop-up-active");
  }, 7500);

  setTimeout(() => {
    success.pause();
  }, 12500);
}
