mobile = document.getElementById('mobile');
mobile?mobile.style.display = 'none':void(0);

$(document).ready(function(){
  $('#hamb').on('click', function(){
    change()
  });

  $(window).on('load resize', function(){
    change(1);
  })

  mobile = document.getElementById('mobile');
  mobile.style.display = 'none';
  var t = 0 ;

  function change(a){
    a? t=0 : t = 1 - t;
    mobile.style.display = ['none','flex'][t];
  }
})
