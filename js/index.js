const displayBookings = document.getElementById("display-booking");
const totalPriceElement = document.getElementById("total-price");
const grandTotalElement = document.getElementById("grand-total");
const phoneNumber = document.getElementById("phone");
const couponField = document.getElementById("coupon-field");
const couponInput = document.getElementById("coupon-input");
const btnApply = document.getElementById("btn-apply");
// console.log(couponField);
// console.log(couponInput);
// console.log(couponInput.value);
// console.log(totalPriceElement);
// console.log(grandTotalElement);
let totalSeats = 40;
let totalBooking = 0;
const totalBookingElement = document.getElementById("total-booking");
totalBookingElement.innerText = totalBooking;
// console.log(totalBooking);

const seatsLeftElement = document.getElementById("seats-left");
seatsLeftElement.innerText = totalSeats - totalBooking;

const seats = [
  "A1",
  "A2",
  "A3",
  "A4",
  "B1",
  "B2",
  "B3",
  "B4",
  "C3",
  "C4",
  "D3",
  "D4",
  "E3",
  "E4",
  "F3",
  "F4",
  "G3",
  "G4",
  "H3",
  "H4",
  "I3",
  "I4",
  "J3",
  "J4",
  "C1",
  "C2",
  "D1",
  "D2",
  "E1",
  "E2",
  "F1",
  "F2",
  "I1",
  "I2",
  "G1",
  "G2",
  "H1",
  "H2",
  "J1",
  "J2",
];
// console.log(seats.length);

seats.forEach(function (seat) {
  document.getElementById(seat).addEventListener("click", (event) => {
    // console.log(seat);
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.id);
    // console.dir(event.target);
    // console.log(event.target.className);
    // console.log(event.target.classList.contains("bg-primary", "text-white"));
    if (event.target.classList.contains("bg-primary", "text-white")) {
      alert("The seat has already been booked.");
      return;
    }
    if (totalBooking < 4) {
      changeElementBg(seat);

      const div = document.createElement("div");
      div.innerHTML = `
              <p class="seat-name"></p>
              <p>Economoy</p>
              <p>550</p>
          `;
      //   console.log(div);
      div.childNodes[1].innerText = seat;
      displayBookings.appendChild(div);
      totalBooking++;
      //   console.log(totalBooking);
      totalBookingElement.innerText = totalBooking;
      seatsLeftElement.innerText = totalSeats - totalBooking;
      //////////////////////////////////////////////////////
      totalPriceElement.innerText = totalBooking * 550;
      grandTotalElement.innerText = totalBooking * 550;
      if (totalBooking === 4) {
        btnApply.removeAttribute("disabled");
        btnApply.classList.remove("opacity-60", "cursor-not-allowed");
        btnApply.addEventListener("click", function () {
          //   console.log("clicked Apply");
          const userCouponCode = couponInput.value;
          //   console.log(userCouponCode);
          if (userCouponCode === "NEW15") {
            grandTotalElement.innerText =
              totalBooking * 550 - totalBooking * 550 * 0.15;
            couponField.classList.add("hidden");
          } else if (userCouponCode === "Couple 20") {
            grandTotalElement.innerText =
              totalBooking * 550 - totalBooking * 550 * 0.2;
            couponField.classList.add("hidden");
          } else {
            alert("Invalid Coupon!");
            couponInput.value = "";
          }
        });
      }
      if (
        totalBooking &&
        document.getElementById("btn-next").hasAttribute("disabled")
      ) {
        document.getElementById("btn-next").removeAttribute("disabled");
      }
    } else {
      alert("You Can't Book More Then 4 seats.");
      return;
    }
  });
});
// if (totalBooking > 0) {
//   document.getElementById("btn-next").removeAttribute("disabled");
// }
// console.log(displayBookings.childNodes);
// console.log(displayBookings.childNodes.length);

// console.log(document.getElementById("btn-next").hasAttribute("disabled"));
// console.log(phoneNumber.value);

// phoneNumber.addEventListener("change", (e) => {
//   console.log(e.target);
//   console.log(phoneNumber.value);
// });
