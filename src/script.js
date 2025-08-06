import { esday } from 'esday';

window.addEventListener("load", (event) => {
  const now = esday();
  document.getElementById("date-now").textContent = `${now.format()}`;
});

const btnSet = document.getElementById("set-output");
btnSet.addEventListener('click', (event) => {
  const in5Days = esday().add(5, 'day');
  document.getElementById("date-then").textContent = `${in5Days.format()}`;
});

const btnReset = document.getElementById("reset-output");
btnReset.addEventListener('click', (event) => {
  document.getElementById("date-then").textContent = "??";
});
