import signup from "./signup";

let content = document.querySelector('.content');

// content.appendChild(signup);

document.addEventListener("DOMContentLoaded", () => {
   content.appendChild(signup());
})
