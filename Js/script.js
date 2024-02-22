const seatButton = document.querySelectorAll(".seatButton");
console.dir(seatButton);

for (const button of seatButton) {
  button.addEventListener("click", function () {
    button.classList.replace("bg-slate-100", "bg-green-500");
    button.classList.replace("text-slate-600", "text-white");
    decressAvailable();
    incressSeatValue();
    button.disabled = true;
  });
}

function decressAvailable() {
  const available = document.querySelector(".leftSeat");
  const seatIs = available.innerText;
  let seatIsIntiger = parseInt(seatIs);

  let count = 0;
  count = seatIsIntiger - 1;
  available.textContent = count;
}

function incressSeatValue() {
  const seatCount = document.querySelector(".seatCount");
  const seatCountIS = seatCount.innerText;
  let seatCountIntiger = parseInt(seatCountIS);

  let count = 0;
  count = seatCountIntiger + 1;
  seatCount.innerText = count;
}
