document.addEventListener("click", (e) => {
  const index = e.target.parentElement.dataset.id;
  if (index) {
    const items = Array.from(document.querySelectorAll("li"));
    items.forEach((element) => {
      if (element.className === "rating-selected") {
        element.classList.remove("rating-selected");
      }
    });
    items[index].classList.add("rating-selected");
  }
});
