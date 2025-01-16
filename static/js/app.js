const mode = localStorage.getItem("mode") || "";
const toggle = document.querySelector("#toggle");
const moon = document.querySelector("#moon");
const body = document.querySelector("body");

document.body.className = mode;
if (mode === "light") {
  document.getElementsByClassName("moon")[0].classList.toggle("sun");
  document.getElementsByClassName("toggle")[0].classList.toggle("day");
}
toggle.style.visibility = "visible";

const notification = document.querySelector("#notification");
const nav = document.querySelector("#nav");

if (!notification) {
  nav.style.height = "80px";
  nav.style.top = 0;
}

toggle.addEventListener("click", () => {
  toggle.style.transition = "all 500ms ease-in-out";
  moon.style.transition = "all 400ms ease-in-out";
  document.getElementsByClassName("moon")[0].classList.toggle("sun");
  document.getElementsByClassName("toggle")[0].classList.toggle("day");
  localStorage.setItem("mode", mode === "light" ? "" : "light");
  document.body.classList.toggle("light");
});

const search = document.querySelector("#search");
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", () => {
  search.style.display = "flex";
});

const copyButtons = document.querySelectorAll(".copyLink");

copyButtons?.forEach(copyButton => {
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href);
    copyButton.innerHTML = "Copied";
  });
});
