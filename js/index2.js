/*$(document).ready(function () {
  window.addEventListener("scroll", function () {
    let a = window.scrollY;

   
    if (a >= 700) {
        $("#con1 h2").addClass("on");
        $(".about_me .me1").addClass("on");
        $(".box1").addClass("on");
        $(".box1 h4").addClass("on");
        $(".click").addClass("on");
        $(".con1_1 .me2").addClass("on");
        $(".box2 h3").addClass("on");
        $(".box2 h4").addClass("on");
        $(".box2 ul").addClass("on");
        $(".box2").addClass("on");
      }
  
      if (a >= 1500) {
        $("#con2 > h2").addClass("on");
        $(".computer").addClass("on");
        $(".con2_2").addClass("on");
      }
  
      if (a >= 2300) {
        $("#con3 > h2").addClass("on");
        $(".con3_1").addClass("on");
        $("#con3 > h4").addClass("on");
      }
  
      if (a >= 3150) {
        $("#con4 h2").addClass("on");
        $("#con4 .bottom").addClass("on");
        $("#con4 h3").addClass("on");
        $("#con4 h4").addClass("on");
      } 
  });
  let baseline = -200;
  let visual = $("#fro1").offset().top + baseline;
  let con1 = $("#fro2").offset().top + baseline;
  let con2 = $("#fro3").offset().top + baseline;
  let con3 = $("#fro4").offset().top + baseline;
  let con4 = $("#fro5").offset().top + baseline;
  //console.log(visual);
  let x = $(this).index();
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (scroll > visual && scroll < con1) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(0).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(0).children("a").addClass("on");
    } else if (scroll > con1 && scroll < con2) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(1).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(1).children("a").addClass("on");
    } else if (scroll > con2 && scroll < con3) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(2).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(2).children("a").addClass("on");
    } else if (scroll > con3 && scroll < con4) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(3).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(3).children("a").addClass("on");
    } else {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(4).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(4).children("a").addClass("on");
    }
    $(".navi li").on("click", function () {
      target = $(this).children("a").attr("href");
      targetpos = $(target).offset().top;
      movescroll(targetpos);
    });

    function movescroll(targetpos) {
      $("html, body").stop().animate({ scrollTop: targetpos }, 1000);
    }
  });
});*/
