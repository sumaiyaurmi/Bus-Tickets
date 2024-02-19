let count = 0;
const Sits = document.querySelectorAll(".sits");
for (const sit of Sits) {
  sit.addEventListener("click", colorMe);

  function colorMe() {
    count = count + 1;
    if (count === 1) {
      document.getElementById("next-btn").removeAttribute("disabled");
    }

    if (count === 4) {
      for (const sit of Sits) {
        sit.setAttribute("disabled", true);
      }
      const applyButton = document.getElementById("apply-btn");
      applyButton.removeAttribute("disabled");
    }

    // sit.classList.add("bg-[#1DD100]");

    // available sit komano
    const currentSit = getNewScoreValueById("current-sit");
    const leftSit = currentSit - 1;
    setNewScoreValueById("current-sit", leftSit);

    // booked sit barano
    const currentBookedSit = getNewScoreValueById("booked-sit");
    const newBookedSit = currentBookedSit + 1;
    setNewScoreValueById("booked-sit", newBookedSit);

    sit.style.backgroundColor = "green";
    sit.classList.add("text-white");

    // append part
    // name
    const title = sit.innerText;
    const nameContainer = document.getElementById("Sit-name-Container");
    const p1 = document.createElement("p");
    p1.innerText = title;
    nameContainer.appendChild(p1);
    // class
    const classContainer = document.getElementById("sit-class-container");
    const p2 = document.createElement("p");
    p2.innerText = "Economoy";
    classContainer.appendChild(p2);
    // Price
    const priceContainer = document.getElementById("site-price-container");
    const p3 = document.createElement("p");
    p3.innerText = "550";
    priceContainer.appendChild(p3);

    // total price
    const bookingSitCollection = getNewScoreValueById("booked-sit");
    const totalPrice = bookingSitCollection * 550;
    document.getElementById("total-price").innerText = totalPrice;

    // grand total
    const bookingSit = getNewScoreValueById("booked-sit");
    let grandPrice = bookingSit * 550;
    document.getElementById("grand-total").innerText = grandPrice;

    // btn click once
    sit.disabled = true;
    sit.style.color = "white";
  }
}
// test

// discount section
const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function () {
  // total price
  const bookingSitCollection = getNewScoreValueById("booked-sit");
  const totalPrice = bookingSitCollection * 550;
  // grand price
  const bookingSit = getNewScoreValueById("booked-sit");
  let grandPrice = bookingSit * 550;

  // get the inpuut value
  const cuponInput = document.getElementById("cupon-input").value;
  // hole
  if (totalPrice >= 2200) {
    if (cuponInput === "NEW15") {
      const newTotalPrice = totalPrice * (0.15).toFixed(2);
      grandPrice = parseInt(totalPrice - newTotalPrice);
      document.getElementById("grand-total").innerText = grandPrice;
// apply btn hide
      document.getElementById("cupon-container").classList.add("hidden");
// discount append
document.getElementById("discount-title").innerText="Discount";
document.getElementById('discount-amount').innerText=newTotalPrice;

    } else if (cuponInput === "Couple 20") {
      const newTotalPrice = totalPrice * (0.2).toFixed(2);
      grandPrice = parseInt(totalPrice - newTotalPrice);
      document.getElementById("grand-total").innerText = grandPrice;
      document.getElementById("cupon-container").classList.add("hidden");
// display append
      document.getElementById("discount-title").innerText="Discount";
document.getElementById('discount-amount').innerText=newTotalPrice;
    } else {
      alert("invalid cupon");
    }
  }
  // na  hole
  else {
    alert("please booked at least 4 sits");
  }
});

// next btn click
function final() {
  hideElementById("header");
  hideElementById("offer-section");
  hideElementById("poribohon");
  hideElementById("sit-section");

  showElementById("PopUp");
}
