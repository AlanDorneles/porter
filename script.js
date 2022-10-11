var modal = document.getElementById('modal');
var container = document.getElementById("container");
var force = document.getElementsByClassName('force');
var seemore= document.getElementsByClassName("see-more")
var close = document.getElementsByClassName("close")[0];

for (var i = 0; i < force.length; i++) {
  force[i].onclick = function() {
    modal.style.display = 'block';
    
    
  
  var close = document.getElementsByClassName('close');
  close[0].onclick = function() {
    modal.style.display = 'none';
    modal.style.width = "75%";
    modal.style.height = "75%";
    seemore[0].style.display = "block";  
    modal.style.overflow = "clip"  
  }
  }
}

/* When the user clicks anywhere outside of the modal, close it */

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

  }
}

function abriraba(){
  /*espandir a aba*/
  document.getElementById("modal").style.width = "100%";
  document.getElementById("modal").style.height = "100%";
  document.getElementById("modal").style.overflow = "auto";
  seemore[0].style.display = "none";
}

function fechar(){
  /*fechar a aba*/
  seemore[0].style.display = "block";
  document.getElementById("modal").style.display = "none";
  document.getElementById("modal").style.overflow = "clip";

}
