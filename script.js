window.addEventListener("click", event => {
    // first check if it was already open
    let wasOpen = event.target.matches("menuBTN-EXPAND") &&
      event.target.nextElementSibling.classList.contains("open");
    // next close every dropdown
    for (let dd of dropdown) dd.classList.toggle("open", false);
    // then if a link was clicked, open the associated dropdown, BUT only if not open before
    if (!wasOpen && event.target.matches("menuBTN-EXPAND")) {
      event.target.nextElementSibling.classList.toggle("open");
    }
  });