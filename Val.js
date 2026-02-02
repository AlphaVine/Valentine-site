const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

noBtn.addEventListener("mouseenter", () => {
  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - noBtn.offsetWidth;
  const maxY = cardRect.height - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
  message.style.display = "block";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  document.body.style.background =
    "linear-gradient(135deg, #ff9a9e, #fad0c4)";
});
