// Countdown timer for next draw
const timerEl = document.getElementById("timer");

// 30 days from now
let drawDate = new Date();
drawDate.setDate(drawDate.getDate() + 30);

function updateTimer() {
  let now = new Date().getTime();
  let distance = drawDate - now;

  if (distance <= 0) {
    timerEl.innerHTML = "🎉 Draw happening now!";
    return;
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Buy button
document.getElementById("buyBtn").addEventListener("click", () => {
  alert("Payment coming soon — only USDT (TRC20) supported!");
});