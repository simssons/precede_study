$(function(){
  $('.gnb').hover(function(){
    $('span.blue_line').fadeIn();
    $('.gnb_scd_depth').stop().slideDown();
  },function(){
    $('span.blue_line').fadeOut();
    $('.gnb_scd_depth').stop().slideUp();
  })

  //hover시 글씨변경
  $('.gnb_scd_depth').hover(function(){
    var listIndex = $(this).parent('li').index();
    $('.gnb>li:eq(' + listIndex +') > a').css({'color':'#15a2ee','font-weight':'bold'})
  },function(){
      $('.gnb>li> a').css({'color':'','font-weight':''})
  })
  
})
