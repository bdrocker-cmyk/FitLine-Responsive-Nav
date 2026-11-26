const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// TODO 1 Enable js enhanced nav, reveal the button, and set the initial state of the menu to closed.
document.documentElement.classList.add("js");
button.hidden=false;
list.dataset.open="false";

// TODO 2: keeps visible menu state and aria-expanded attribute in sync.
function setMenu(open) {
    button.setAttribute("aria-expanded", String(open));
    list.dataset.open = String(open);
}

// TODO 3: allows the menu button to toggle the menu open and closed.
button.addEventListener("click", () => {
   setMenu(button.getAttribute("aria-expanded") !== "true");
});

// TODO 4: closes the menu when the escape key is pressed and the menu is open, and returns focus to the menu button.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" &&
        button.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        button.focus();
    }
});
// Add a comment above every logical step explaining what it does and why it is needed.
