document.addEventListener("DOMContentLoaded", function(event) {
  const menuLink = document.getElementById("menu-link")
  const menu = document.getElementById("menu")

  console.log("Hello, Day Of Code-rs. Well done for opening the console!")
  console.log("Javascript is running on this web page which listens for the user clicking on the HTML element with an id of menu-link")
  console.log("View the javascript at https://2019.dayofcode.co.uk/assets/javascript/app.js")

  menuLink.addEventListener("click", function() {
    console.log("You've clicked on the HTML element with an id of menu-link")
    if (menu.style.display === "none") {
      menu.style.display = "block"
      menuLink.textContent = "Hide menu ▲"
      console.log("The menu is now showing because when you clicked the menu-link, the menu's css was set to hidden")

    } else {
      menu.style.display = "none"
      menuLink.textContent = "Show menu ▼"
      console.log("The menu is now hidden because when you clicked the menu-link, the menu's css was set to display")
    }
  })
})
