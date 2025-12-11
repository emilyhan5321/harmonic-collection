

document.querySelector(".main-content");




document.addEventListener("click", function(e) {
  if (e.target.id === "nav") return;
  window.location.href = "../1home/index.html"; 
});