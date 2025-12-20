

document.querySelector(".main-content");




document.addEventListener("click", function(e) {
  if (e.target.id === "nav") return;
  window.location.href = "../1home/index.html"; 
});


document.addEventListener("click", function (e) {
  // If the click happened inside the nav, do nothing
  if (e.target.closest("#nav")) return;

  // Otherwise go to next page
  window.location.href = "../1home/index.html";
});
