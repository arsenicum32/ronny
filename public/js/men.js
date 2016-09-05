var txt = '<div class="men"><div class="name">Name Surname</div><img src="http://placehold.it/200x200" class="ava"/><div class="txt">fheskfs fhsejkfhsk fesjkfhsjekfhjkse fshefkjs efkjesf kskjesfhkjf sehfjks</div></div>'
  $(window).on('load resize', function(){
    var c = Math.floor(window.innerWidth / 300);
    $('#cont').html('');
    for(var i=0;i<c;i++){
      $('.men').each(function(e,i){
        $(this).css('border-right','2px solid #eee');
      })
      $('#cont').append(txt)
    }
  })
