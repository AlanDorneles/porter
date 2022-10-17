var more = document.getElementById("headermore");
var displaymore = document.getElementById("display_more");
more.addEventListener("mouseover", function(){
  displaymore.style.display ="block", false;
})
more.addEventListener("mouseout", function () {
  (displaymore.style.display = "none"), false;
});