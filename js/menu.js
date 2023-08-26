var submenuHover = false;

function menuOpen(e) {
  const title = e.dataset.title;
  var menubar = document.getElementById(`${title}_menu`);
  if (menubar) {
    menubar.setAttribute("style", "display: inline-block;");
  }
}

function menuClose(e) {
  const title = e.dataset.title;
  var menubar = document.getElementById(`${title}_menu`);
  if (!submenuHover && menubar) {
    menubar.setAttribute("style", "display: none;");
  }
}

function submenuHovered() {
  submenuHover = true;
}

function submenuHovered() {
  submenuHover = false;
}
