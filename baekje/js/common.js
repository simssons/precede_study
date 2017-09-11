$(function(){
  $('.gnb_depth_01 > li').hover(function(){
    $(this).children('a').css({'background-color':'#364ea2','color':'#FFF'})
    $(this).siblings().find('.gnb_depth_02').removeClass('gnb_on')
    $(this).find('.gnb_depth_02').addClass('gnb_on')
  },function(){
    $(this).children('a').css({'background-color':'','color':''})
    $(this).find('.gnb_depth_02').removeClass('gnb_on')
  })
})
