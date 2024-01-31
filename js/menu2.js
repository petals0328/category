$(document).ready(function () {

  $(".main").hover(function(){
    $(this).find(".sub").slideDown();
  },function(){
    $(this).find(".sub").slideUp();
  });

});