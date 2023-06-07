const inputs = document.querySelectorAll("input");
const htmlcssContent = document.querySelector(".html-css");
const javascriptContent = document.querySelector(".javascript");

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    if (e.target.id == "html-css") {
      javascriptContent.style.display = "none";
      htmlcssContent.style.display = "flex";
    } else if (e.target.id == "javascript") {
      htmlcssContent.style.display = "none";
      javascriptContent.style.display = "block";
      javascriptContent.classList.add("checked");
    } else {
      javascriptContent.classList.remove("checked");
      javascriptContent.style.display = "block";
      htmlcssContent.style.display = "flex";
    }
  });
});
