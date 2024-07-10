var menuHover = false;
var submenuHover = false;

function menuOpen() {
  menuHover = true;
  var subMenu = document.getElementById("subMenu");
  subMenu.setAttribute("style", "display: table-row-group;");
}

function menuClose() {
  menuHover = false;
  var subMenu = document.getElementById("subMenu");
  setTimeout(() => {
    if (!submenuHover && !menuHover) {
      subMenu.setAttribute("style", "display: none;");
    }
  }, 200);
}

function submenuHovered() {
  submenuHover = true;
}

function submenuLeft() {
  submenuHover = false;
  menuClose();
}
