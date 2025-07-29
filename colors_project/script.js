const colors = ["#f44336", "#4CAF50", "#2196F3", "#FF9800", "#9C27B0"];

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;
}