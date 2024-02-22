let clicks = 0;
const seatButton = document.querySelectorAll(".seatButton");
for (const button of seatButton) {
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    if (clicks < 4) {
      clicks++;
      button.classList.replace("bg-slate-100", "bg-green-500");
      button.classList.replace("text-slate-600", "text-white");
      const buttonValue = button.textContent;
      decressAvailable();
      incressSeatValue();
      createSeat(buttonValue);

      const totalAmount = totalPrice();
      coupon(totalAmount);

      button.disabled = true;
    } else {
      button.disabled = true;
      alert("You cannot click anymore!");
    }
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
  seatNumberElement.classList.add("text-baseline", "text-gray-500");
  seatNumberElement.id = "seatNumber";
  seatNumberElement.textContent = `${buttonValue}`;
  seatElement.appendChild(seatNumberElement);

  // Create Seat type
  const seatTypeElement = document.createElement("h3");
  seatTypeElement.classList.add("text-baseline", "text-gray-500");
  seatTypeElement.textContent = "Economy";
  seatElement.appendChild(seatTypeElement);

  // Create Price element
  const priceElement = document.createElement("h3");
  priceElement.classList.add("text-baseline", "text-gray-500", "price");
  priceElement.textContent = "550";
  seatElement.appendChild(priceElement);

  afterSelected.appendChild(seatElement);
}

function totalPrice() {
  const prices = document.getElementsByClassName("price");
  let total = 0;
  for (const price of prices) {
    const priceValue = price.innerText;
    const priceValuenumber = parseFloat(priceValue);
    total = priceValuenumber + total;
  }

  const totalAmount = document.querySelector("#totalAmount");
  totalAmount.textContent = " ";
  totalAmount.innerText = total;
  return total;
}

function coupon(amount) {
  const couponField = document.getElementById("coupon");
  const grandTotal = document.querySelector("#grandAmmount");
  grandTotal.textContent = " ";

  const offerNew = document.querySelector("#new");
  const offerNewValue = offerNew.innerText;

  const offerCouple = document.querySelector("#couple");
  const offerCoupleValue = offerCouple.innerText;

  const hideForm = document.querySelector(".form");
  const condition = document.querySelector("#condition");

  const applyButton = document.querySelector("#apply");

  couponField.addEventListener("change", function (event) {
    event.stopPropagation();
    const typedValue = event.target.value;

    applyButton.addEventListener("click", function (event) {
      event.stopPropagation();

      if (typedValue === offerNewValue) {
        const afterNew = amount * (15 / 100);
        const newGrandTotal = amount - afterNew;
        grandTotal.innerText = newGrandTotal;
        hideForm.classList.add("hidden");
        condition.classList.add("hidden");
      } else if (typedValue === offerCoupleValue) {
        const afterCouple = amount * (20 / 100);
        const coupleGrandTotal = amount - afterCouple;
        grandTotal.innerText = coupleGrandTotal;
        hideForm.classList.add("hidden");
        condition.classList.add("hidden");
      } else {
        alert("worng Coupon");
      }
    });
  });
}

document.getElementById("continue").addEventListener("click", function () {
  location.reload(true);
});
