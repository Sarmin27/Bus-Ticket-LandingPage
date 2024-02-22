const seatButton = document.querySelectorAll(".seatButton");
console.dir(seatButton);

for (const button of seatButton) {
  button.addEventListener("click", function () {
    button.classList.replace("bg-slate-100", "bg-green-500");
    button.classList.replace("text-slate-600", "text-white");
    decressAvailable();
    button.disabled = true;
    // // Event handler code for each button
    // console.log("Button clicked: ", button.textContent);
  });
}

function decressAvailable() {
  const available = document.querySelector(".leftSeat");
  const seatIs = available.innerText;
  var seatIsInteger = parseInt(seatIs);

  let count = 0;
  count = seatIsInteger - 1;
  available.textContent = count;
}
