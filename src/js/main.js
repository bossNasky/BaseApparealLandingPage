import "./../css/style.css";

const authorElement = document.querySelector(".author");
const shareButton = document.querySelector(".btn--share");

const toggleShare = function () {
  authorElement?.classList.toggle("show");
};

shareButton?.addEventListener("click", toggleShare);
