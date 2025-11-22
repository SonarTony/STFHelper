function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const rollButton = document.getElementById("rollButton");
const d6aEl = document.getElementById("d6aValue");
const d6bEl = document.getElementById("d6bValue");
const d10El = document.getElementById("d10Value");
const totalEl = document.getElementById("totalValue");
const historyList = document.getElementById("historyList");

const maxHistory = 12;

function addToHistory(text) {
  const div = document.createElement("div");
  div.textContent = text;
  historyList.prepend(div);

  // limit history
  while (historyList.children.length > maxHistory) {
    historyList.removeChild(historyList.lastChild);
  }
}

rollButton.addEventListener("click", () => {
  // visual feedback
  rollButton.classList.add("rolling");

  // small delay to make the color change visible
  setTimeout(() => {
    const d6a = rollDie(6);
    const d6b = rollDie(6);
    const d10 = rollDie(10);

    const total = (d6a + d6b) * 10 + d10;

    d6aEl.textContent = d6a;
    d6bEl.textContent = d6b;
    d10El.textContent = d10;
    totalEl.textContent = total;

    addToHistory(
      `Total ${total}  -  (D6 A: ${d6a}, D6 B: ${d6b}, D10: ${d10})`
    );

    rollButton.classList.remove("rolling");
  }, 180);
});
