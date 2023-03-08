const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.parentNode.getAttribute("data-text");
    navigator.clipboard.writeText(text);
    alert(`"${text}" has been copied to the clipboard!`);
  });
});

const previousRequests = [
  "Nature infused with AI",
  "A beautiful mind",
  "Duality of life",
  "International Women's Day",
  "A Dystopian City",
  "Old War Veteran",
];

const datalist = document.querySelector("#previous-requests");

previousRequests.forEach((request) => {
  const option = document.createElement("option");
  option.value = request;
  datalist.appendChild(option);
});
