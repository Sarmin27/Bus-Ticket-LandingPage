const seatButton = document.querySelectorAll(".seatButton");
console.dir(seatButton);

for (const button of seatButton) {
  button.addEventListener("click", function () {
    button.classList.replace("bg-slate-100", "bg-green-500");
    button.classList.replace("text-slate-600", "text-white");
    const buttonValue = button.textContent;
    decressAvailable();
    incressSeatValue();
    createSeat(buttonValue);

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

function createSeat(buttonValue) {
  const afterSelected = document.querySelector(".afterSelected");

  const seatElement = document.createElement("div");
  seatElement.classList.add("flex", "justify-between");

  // Create seat Number
  const seatNumberElement = document.createElement("h3");
  seatNumberElement.classList.add("text-base", "text-gray-500");
  seatNumberElement.id = "seatNumber";
  seatNumberElement.textContent = `${buttonValue}`;
  seatElement.appendChild(seatNumberElement);

  // Create Seat type
  const seatTypeElement = document.createElement("h3");
  seatTypeElement.classList.add("text-base", "text-gray-500");
  seatTypeElement.textContent = "Economy";
  seatElement.appendChild(seatTypeElement);

  // Create Price element
  const priceElement = document.createElement("h3");
  priceElement.classList.add("text-base", "text-gray-500");
  priceElement.textContent = "550";
  seatElement.appendChild(priceElement);

  afterSelected.appendChild(seatElement);
}
