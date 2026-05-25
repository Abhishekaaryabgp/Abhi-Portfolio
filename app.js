let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  this.innerText = "Let's Talk! 🚀";
  setTimeout(() => {
    window.location.href = "contact.html";
  }, 500);
});
