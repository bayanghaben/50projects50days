const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
// //another way:
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses(); //using the same function
    panel.classList.toggle("active");
  });
});
