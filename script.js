function toggleMenu() {
  let myMenuCenter = document.getElementById("menu-center-active");
  let myMenuRight = document.getElementById("menu-right-active");
  if (
    myMenuCenter.className === "nav-center" &&
    myMenuRight.className === "nav-right"
  ) {
    myMenuCenter.className += " menu-center-active";
    myMenuRight.className += " menu-right-active";
  } else {
    myMenuCenter.className = "nav-center";
    myMenuRight.className = "nav-right";
  }
}
