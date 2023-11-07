/*스킬*/
/*스킬*/
/*스킬*/


$(document).ready(function () {
  $(".card_1").on("mouseenter", function () {
    $(".card_1 .cardBox").addClass("on");
  });
  $(".card_1").on("mouseleave", function () {
    $(".card_1 .cardBox").removeClass("on");
  });
  $(".card_2").on("mouseenter", function () {
    $(".card_2 .cardBox").addClass("on");
  });
  $(".card_2").on("mouseleave", function () {
    $(".card_2 .cardBox").removeClass("on");
  });
  $(".card_3").on("mouseenter", function () {
    $(".card_3 .cardBox").addClass("on");
  });
  $(".card_3").on("mouseleave", function () {
    $(".card_3 .cardBox").removeClass("on");
  });
  $(".card_4").on("mouseenter", function () {
    $(".card_4 .cardBox").addClass("on");
  });
  $(".card_4").on("mouseleave", function () {
    $(".card_4 .cardBox").removeClass("on");
  });
  $(".card_5").on("mouseenter", function () {
    $(".card_5 .cardBox").addClass("on");
  });
  $(".card_5").on("mouseleave", function () {
    $(".card_5 .cardBox").removeClass("on");
  });
  $(".card_6").on("mouseenter", function () {
    $(".card_6 .cardBox").addClass("on");
  });
  $(".card_6").on("mouseleave", function () {
    $(".card_6 .cardBox").removeClass("on");
  });
  $(".card_7").on("mouseenter", function () {
    $(".card_7 .cardBox").addClass("on");
  });
  $(".card_7").on("mouseleave", function () {
    $(".card_7 .cardBox").removeClass("on");
  });
  $(".card_8").on("mouseenter", function () {
    $(".card_8 .cardBox").addClass("on");
  });
  $(".card_8").on("mouseleave", function () {
    $(".card_8 .cardBox").removeClass("on");
  });
  /*메뉴*/
  /*메뉴*/
  /*메뉴*/

  let home = document.querySelector(".home");
  let about = document.querySelector(".about");
  let work = document.querySelector(".work");
  let gallery = document.querySelector(".gallery");
  let contact = document.querySelector(".contact");

  home.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  about.addEventListener("click", function () {
    window.scrollTo({ top: 900, behavior: "smooth" });
  });
  work.addEventListener("click", function () {
    window.scrollTo({ top: 1800, behavior: "smooth" });
  });
  gallery.addEventListener("click", function () {
    window.scrollTo({ top: 2700, behavior: "smooth" });
  });
  contact.addEventListener("click", function () {
    window.scrollTo({ top: 3600, behavior: "smooth" });
  });

  /*갤러리*/
  /*갤러리*/
  /*갤러리*/
  $(".small li").on("click", function () {
    let i = $(this).index();
    $(".large li").eq(i).css({ display: "block" });
    $(".large li").hide();
    $(".con3_1 a").css({ display: "block" });
    $(".large li").eq(i).show();
  });

  $(".con3_1 a").on("click", function () {
    $(".large li").hide();
    $(".con3_1 a").css({ display: "none" });
  });
  /*슬라이드*/
  /*슬라이드*/
  /*슬라이드*/
  let i = 0;
  let total = $(".text2 > li").length;

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

  /*스크롤이벤트*/
  /*스크롤이벤트*/
  /*스크롤이벤트*/
  /*
  window.addEventListener("scroll", function () {
    let a = window.scrollY;

    if (a >= 0) {
      home.classList.add("on");
      about.classList.remove("on");
      work.classList.remove("on");
      gallery.classList.remove("on");
      contact.classList.remove("on");
    }
    if (a >= 800) {
      home.classList.remove("on");
      about.classList.add("on");
      work.classList.remove("on");
      gallery.classList.remove("on");
      contact.classList.remove("on");
    }
    if (a >= 1600) {
      home.classList.remove("on");
      about.classList.remove("on");
      work.classList.add("on");
      gallery.classList.remove("on");
      contact.classList.remove("on");
    }
    if (a >= 2400) {
      home.classList.remove("on");
      about.classList.remove("on");
      work.classList.remove("on");
      gallery.classList.add("on");
      contact.classList.remove("on");
    }
    if (a >= 3200) {
      home.classList.remove("on");
      about.classList.remove("on");
      work.classList.remove("on");
      gallery.classList.remove("on");
      contact.classList.add("on");
    }
    */
  /*스크롤이벤트2*/
  /*스크롤이벤트2*/
  /*스크롤이벤트2*/
  /*
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

    if (a >= 3400) {
      $("#con4 h2").addClass("on");
      $("#con4 .bottom").addClass("on");
      $("#con4 h3").addClass("on");
      $("#con4 h4").addClass("on");
    }
    console.log(a);
  });
*/
  /*풀스크린*/
  /*풀스크린*/
  /*풀스크린*/
  /*
  let baseline = -200;
  let visual = $("#visual").offset().top + baseline;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + baseline;
  let con4 = $("#con4").offset().top + baseline;
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
  */
  let baseline = -200;
  let visual = $("#visual").offset().top + baseline;
  let con1 = $("#con1").offset().top + baseline;
  let con2 = $("#con2").offset().top + baseline;
  let con3 = $("#con3").offset().top + baseline;
  let con4 = $("#con4").offset().top + baseline;
  //console.log(visual);
  let x = $(this).index();
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    if (scroll > visual && scroll < con1) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(0).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(0).children("a").addClass("on");
      home.classList.add("on");
      about.classList.remove("on");
      work.classList.remove("on");
      gallery.classList.remove("on");
      contact.classList.remove("on");
    } else if (scroll > con1 && scroll < con2) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(1).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(1).children("a").addClass("on");
      home.classList.remove("on");
      about.classList.add("on");
      work.classList.remove("on");
      gallery.classList.remove("on");
      contact.classList.remove("on");
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
    } else if (scroll > con2 && scroll < con3) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(2).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(2).children("a").addClass("on");
      home.classList.remove("on");
      about.classList.remove("on");
      work.classList.add("on");
      gallery.classList.remove("on");
      contact.classList.remove("on");
      $("#con2 > h2").addClass("on");
      $(".computer").addClass("on");
      $(".con2_2").addClass("on");
    } else if (scroll > con3 && scroll < con4) {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(3).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(3).children("a").addClass("on");
      home.classList.remove("on");
      about.classList.remove("on");
      work.classList.remove("on");
      gallery.classList.add("on");
      contact.classList.remove("on");
      $("#con3 > h2").addClass("on");
      $(".con3_1").addClass("on");
      $("#con3 > h4").addClass("on");
    } else {
      $("#wrap>div").removeClass("on");
      $("#wrap>div").eq(4).addClass("on");
      $(".bar a").removeClass("on");
      $(".bar").eq(4).children("a").addClass("on");
      home.classList.remove("on");
      about.classList.remove("on");
      work.classList.remove("on");
      gallery.classList.remove("on");
      contact.classList.add("on");
      $("#con4 h2").addClass("on");
      $("#con4 .bottom").addClass("on");
      $("#con4 h3").addClass("on");
      $("#con4 h4").addClass("on");
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
  /*
  let home = document.querySelector(".home");
  let about = document.querySelector(".about");
  let work = document.querySelector(".work");
  let gallery = document.querySelector(".gallery");
  let contact = document.querySelector(".contact");

  home.addEventListener("click", function () {
    window.scrollTo({ top: visual, behavior: "smooth" });
  });
  about.addEventListener("click", function () {
    window.scrollTo({ top: con1, behavior: "smooth" });
  });
  work.addEventListener("click", function () {
    window.scrollTo({ top: con2, behavior: "smooth" });
  });
  gallery.addEventListener("click", function () {
    window.scrollTo({ top: con3, behavior: "smooth" });
  });
  contact.addEventListener("click", function () {
    window.scrollTo({ top: con4, behavior: "smooth" });
  });
  */
});
