const view = document.querySelector(".view")
const close = document.querySelector(".close")
const sideBar = document.querySelector(".sidebar");

view.addEventListener("click", toggleSideBar);

function toggleSideBar(event) {
  sideBar.style.display = "block";
  sideBar.style.position = "fixed";
  sideBar.style.zIndex = "9999";

  close.addEventListener("click", () => {
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "none";
  });

  window.addEventListener("resize", () => {
    if(window.innerWidth > 1200) {
      console.log("resized");
      sideBar.style.display = "block";
      sideBar.style.position = "fixed";
      sideBar.style.zIndex = "9999";
    }
  });
}

