/*슬라이드*/
/*슬라이드*/
/*슬라이드*/

$(function () {
  let i = 0;
  let total = $(".text2 li").length;

  function start() {
    i++;

    if (i == total - 1) {
      $(".text2")
        .stop()
        .animate({ marginLeft: "-400%" }, function () {
          $(".text2").css({ marginLeft: "0%" });
        });
      $(".computerul")
        .stop()
        .animate({ marginLeft: "-400%" }, function () {
          $(".computerul").css({ marginLeft: "0%" });
        });
      i = 0;
    } else {
      $(".text2")
        .stop()
        .animate({ marginLeft: `${-i * 100}%` });
      $(".computerul")
        .stop()
        .animate({ marginLeft: `${-i * 100}%` });
    }
  }

  $(".slidecon .next").click(function () {
    start();
  });

  function back() {
    i--;

    if (i < 0) {
      $(".text2").css({ marginLeft: "-400%" });
      $(".text2").stop().animate({ marginLeft: "-300%" });
      $(".computerul").css({ marginLeft: "-400%" });
      $(".computerul").stop().animate({ marginLeft: "-300%" });
      i = 3;
    } else {
      $(".text2").animate({ marginLeft: `${-i * 100}%` });
      $(".computerul").animate({ marginLeft: `${-i * 100}%` });
    }
  }

  $(".slidecon  .prev").click(function () {
    back();
  });
});

/*스크롤효과*/
/*스크롤효과*/
/*스크롤효과*/

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
  /*
  if (a >= 3100) {
    $(".con5_2 ul").addClass("on");
  }
*/
});
