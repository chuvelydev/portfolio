$(document).ready(function () {
  window.addEventListener("scroll", function () {
    let a = window.scrollY;
    console.log(a);
    if (a >= 0) {
      $("#fro1 h3").css({ display: "block" });
    }
    if (a >= 290) {
      $("#fro1 h3").css({ display: "block" });
      $(".fro2_text").css({ display: "none" });
    }
    if (a >= 300) {
      $("#fro1 h3").css({ display: "none" });
      $(".fro2_text").css({ display: "none" });
    }
    if (a >= 700) {
      $(".fro2_1 .fro2_box1 h2").removeClass("on");
      $(".fro2_1 .fro2_box1 p").removeClass("on");
      $(".fro2_1 .fro2_box2").removeClass("on");
    }
    if (a >= 800) {
      $(".fro2_1 .fro2_box1 h2").addClass("on");
      $(".fro2_1 .fro2_box1 p").addClass("on");
      $(".fro2_1 .fro2_box2").addClass("on");
      $(".fro2_text").addClass("on");
      $(".fro2_text").css({ display: "block" });
    }
    if (a >= 1100) {
      $(".fro2_2 .fro2_box1 h2").addClass("on");
      $(".fro2_2 .fro2_box1 p").addClass("on");
      $(".fro2_2 .fro2_box2").addClass("on");
      $(".fro2_text").css({ display: "block" });
    }
    if (a >= 1600) {
      $(".fro2_text").css({ display: "block" });
    }
    if (a >= 1800) {
      $(".fro2_3 .fro2_box1 h2").addClass("on");
      $(".fro2_3 .fro2_box1 p").addClass("on");
      $(".fro2_3 .fro2_box2").addClass("on");
      $(".fro3_box").removeClass("on");
      $(".fro2_text").css({ display: "block" });
    }
    if (a >= 2500) {
      $(".fro3_box h2").removeClass("on");
      $(" .fro3_box p").removeClass("on");
    }
    if (a >= 2700) {
      $(".fro2_text").css({ display: "none" });
      $(".fro3_box h2").addClass("on");
      $(" .fro3_box p").addClass("on");
      $(".fro2_3").removeClass("on");
      $(".fro2_3 .fro2_box1 h2").removeClass("on");
      $(".fro2_3 .fro2_box1 p").removeClass("on");
      $(".fro2_3 .fro2_box2").removeClass("on");
    }
  });
});
