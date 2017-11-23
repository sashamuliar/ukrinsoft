//fixing header by scrolling
$(window).scroll(function(){
  if (pageYOffset >= 235) {
    $(".header-wrapper").addClass("fixed");
    $(".main-wrap").css({"padding-top":"196px"});
  }  else {
    $(".header-wrapper").removeClass("fixed");
    $(".main-wrap").css({"padding-top":"0px"});
  }
});

//hidding search,menu /showing search-line
$(".search").click(function(){
  $(".nav3").fadeOut(250);
  $(".nav2").delay(150).fadeOut(250);
  $(".nav1").delay(250).fadeOut(250);
  $(".search").delay(350).fadeOut(250);
  $(".search-field").delay(350).fadeIn(350);
  $(".close").delay(600).fadeIn(250);
  setTimeout(function() {
    $("#search-input").focus();
  }, 900);
});
$(".close").click(function(){
  $(".close").fadeOut(250);
  $(".search-field").delay(200).fadeOut(250);
  $(".nav1").delay(350).fadeIn(250);
  $(".nav2").delay(450).fadeIn(250);
  $(".nav3").delay(550).fadeIn(250);
  $(".search").delay(650).fadeIn(250);
});

//popup opening
$(".content-sample").click(function(e){
  $(".popup-wrapper").addClass("open");
  var index = ($(".content-sample").index(this));
  $("#content-window").attr("src", arrrayYoutube[index]);
});
$(".popup-wrapper").click(function(e){
  if (e.target != this) {
    return true;
  };
  $(".popup-wrapper").removeClass("open");
});

//aside opening
$(".humb-menu").click(function(){
  $("#sidebar").addClass('show');
  $(".search").fadeOut(250);
  $(".humb-menu").fadeOut(250);
});
$(".close-aside").click(function(){
  $("#sidebar").removeClass('show');
  $(".search").delay(250).fadeIn(250);
  $(".humb-menu").delay(250).fadeIn(250);
});

var arrrayYoutube = [
  "https://www.youtube.com/embed/xNA3l36H1Bo",
  "https://www.youtube.com/embed/O2etBQYLcpg",
  "https://www.youtube.com/embed/RoJ4R5dfZkw",
  "https://www.youtube.com/embed/5CG9RC-OLMo"
]
