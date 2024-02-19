const totalSeats = 40;
const totalBooking = parseInt(
  document.getElementById("total-booking").innerText
);
console.log(totalBooking);
const seatsLeft = (document.getElementById("seats-left").innerText =
  totalSeats - totalBooking);
