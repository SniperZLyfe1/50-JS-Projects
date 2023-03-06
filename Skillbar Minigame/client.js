const progressAutoBar = document.querySelector(".bar-auto");
const progressPlayerBar = document.querySelector(".bar-manual");
const barContainer = document.querySelector(".progress-bar");

document.body.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    let aiRect = progressAutoBar.getBoundingClientRect();
    let playerRect = progressPlayerBar.getBoundingClientRect();
    if (
      aiRect.x + aiRect.width >= playerRect.x &&
      playerRect.x + playerRect.width >= aiRect.x
    ) {
      progressPlayerBar.classList.add("green");
      setTimeout(() => progressPlayerBar.classList.remove("green"), 200);

      progressPlayerBar.classList.remove("active");
      progressAutoBar.classList.remove("active");
      setTimeout(() => progressPlayerBar.classList.add("active"), 500);
      setTimeout(() => progressAutoBar.classList.add("active"), 500);
    } else {
      barContainer.classList.add("active");
      setTimeout(() => barContainer.classList.remove("active"), 200);
    }
  }
});
