$(function () {
  let i = 0;
  let total = $(".text2 li").length;

  //자동넘김

  // let timer = setInterval(start, 5000);

  // 앞으로 슬라이드 함수
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

  // 다음버튼 클릭시 이벤트
  $(".slidecon .next").click(function () {
    //clearInterval(timer);
    start();
    // timer = setInterval(start, 3000);
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

  // 이전버튼 클릭시 이벤트
  $(".slidecon  .prev").click(function () {
    //clearInterval(timer);
    back();
    // timer = setInterval(start, 3000);
  });
});


/*
me4.addEventListener("click", function () {
  window.scrollTo({ top: 2900, behavior: "smooth" });
});

me3.addEventListener("click", function () {
  window.scrollTo({ top: 1800, behavior: "smooth" });
});

me2.addEventListener("click", function () {
  window.scrollTo({ top: 900, behavior: "smooth" });
});

me1.addEventListener("click", function () {
  window.scrollTo({ top: 10, behavior: "smooth" });
});
*/
