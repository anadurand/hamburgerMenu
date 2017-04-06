window.addEventListener("load",function () {

  var menu = document.getElementById("menu-icon");
  menu.addEventListener("click", function(e){
    console.log(this);
    this.classList.toggle("change");

  });






});
