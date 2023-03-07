const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.parentNode.getAttribute("data-text");
    navigator.clipboard.writeText(text);
    alert(`"${text}" has been copied to the clipboard!`);
  });
});
