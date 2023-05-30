const view = document.querySelector(".view")

view.addEventListener("click", toggleSideBar);

function toggleSideBar(event) {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "block";
  sideBar.style.position = "fixed";
  sideBar.style.zIndex = "9999";
}