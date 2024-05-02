const button = document.querySelector("button");
let optionSelected = null;

function selectRatingItem(e) {
  const index = e.target.parentElement.dataset.id;
  if (index) {
    const items = Array.from(document.querySelectorAll("li"));
    items.forEach((element) => {
      if (element.className === "rating-selected") {
        element.classList.remove("rating-selected");
      }
    });
    items[index - 1].classList.add("rating-selected");
    button.disabled = false;
  }
  return index;
}

function changeSection(option) {
  try {
    if (!option) throw "you must rate first before sending response";
    const ratingSection = document.querySelector(".rating-state-section");
    const thankyouSection = document.querySelector(".thankyou-state-section");
    document.querySelector(".rating-number-selected").innerText = option;
    ratingSection.style.opacity = 0;
    setTimeout(() => {
      ratingSection.style.display = "none";
      thankyouSection.style.display = "block";
    }, 300);
  } catch (error) {
    alert(error);
    button.disabled = true;
  }
}

document.addEventListener("click", (e) => {
  optionSelected = selectRatingItem(e);
});

button.addEventListener("click", (e) => {
  changeSection(optionSelected);
});
