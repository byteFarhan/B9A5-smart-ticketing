function changeElementBg(elementId) {
  //   document.getElementById(elementId).style.backgroundColor = "#1DD100";
  document.getElementById(elementId).classList.add("bg-primary", "text-white");
}
function scroolToTicketBooking() {
  document.querySelector("#ticket-booking").scrollIntoView();
}
// changeElementBg("A1");

// const isSure = confirm("Are you Sure?");
// console.log(isSure);

const manageCouponApplyBtn = () => {
  if (totalBooking === 4) {
    couponInput.removeAttribute("disabled");
    btnApply.removeAttribute("disabled");
    btnApply.classList.remove("opacity-60", "cursor-not-allowed");
    btnApply.addEventListener("click", function () {
      //   console.log("clicked Apply");
      const userCouponCode = couponInput.value;
      //   console.log(userCouponCode);
      if (userCouponCode === "") {
        alert("Your Coupon Fild Is Empty!");
      } else if (userCouponCode === "NEW15") {
        grandTotalElement.innerText =
          totalBooking * 550 - totalBooking * 550 * 0.15 || "00.00";
        couponField.classList.add("hidden");
      } else if (userCouponCode === "Couple 20") {
        grandTotalElement.innerText =
          totalBooking * 550 - totalBooking * 550 * 0.2 || "00.00";
        couponField.classList.add("hidden");
      } else {
        alert("Invalid Coupon!");
        couponInput.value = "";
      }
    });
  } else {
    if (!couponInput.hasAttribute("disabled")) {
      couponInput.setAttribute("disabled", true);
      btnApply.setAttribute("disabled", true);
      if (!btnApply.classList.contains("opacity-60", "cursor-not-allowed")) {
        btnApply.classList.add("opacity-60", "cursor-not-allowed");
      }
    }
    couponInput.removeAttribute("disabled");
  }
};
const manageNextBtn = () => {
  if (
    totalBooking > 0 &&
    document.getElementById("btn-next").hasAttribute("disabled")
  ) {
    document.getElementById("btn-next").removeAttribute("disabled");
  } else if (
    totalBooking <= 0 &&
    !document.getElementById("btn-next").hasAttribute("disabled")
  ) {
    document.getElementById("btn-next").setAttribute("disabled", true);
  }
};

// console.log(inpu);
