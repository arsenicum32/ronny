var ft = document.getElementById('par');
ft.onmousemove = function(e){
  var x = e.clientX, y = e.clientY;
  var w = window.innerWidth;
  par.style.background = "url('/img/footer.jpg') no-repeat "+(x/w*100)+"% 50%"
}
