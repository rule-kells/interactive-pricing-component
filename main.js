// variables
const toggleBilling = document.querySelectorAll(
  ".toggle__pricing--wrapper input[type=radio]"
);
const pricingSlider = document.getElementById("pricing__slider");
const monthlyPrice = document.querySelector(".monthly-price");
const month = document.querySelector(".month");
const pageviewText = document.querySelector(".pageview-text");
const monlthyPriceTotals = [8, 12, 16, 24, 36];
const pageviewsArr = ["10K", "50K", "100K", "500k", "1M"];

// toggle billing - form monthly to yearly
toggleBilling.forEach((selection) => {
  selection.addEventListener("click", (_) => {
    if (document.getElementById("yearly").checked) {
      monthlyPrice.innerHTML =
        (monlthyPriceTotals[pricingSlider.value] -
          monlthyPriceTotals[pricingSlider.value] * 0.25) *
        12;
      month.innerHTML = "/year";
    } else {
      month.innerHTML = "/month";
      monthlyPrice.innerHTML = monlthyPriceTotals[pricingSlider.value];
    }
  });
});

pricingSlider.addEventListener("input", (_) => {
  const getSliderValue = pricingSlider.value * 25;
  var changeSliderColor = `linear-gradient(90deg, var(--clr-palette-primary-100) ${getSliderValue}%, var(--clr-palette-neutral-100) ${getSliderValue}%)`;
  pricingSlider.style.background = changeSliderColor;

  pageviewText.innerHTML = pageviewsArr[pricingSlider.value];
  if (document.getElementById("yearly").checked) {
    monthlyPrice.innerHTML =
      (monlthyPriceTotals[pricingSlider.value] -
        monlthyPriceTotals[pricingSlider.value] * 0.25) *
      12;
  } else {
    monthlyPrice.innerHTML = monlthyPriceTotals[pricingSlider.value];
  }
});
