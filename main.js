const panels = document.querySelectorAll(".panel");
// console.log(panels);

panels.forEach((p) => {
  p.addEventListener("click", () => {
    removeActiveClass();
    p.classList.add("active");
  });
});

// remove active class
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
