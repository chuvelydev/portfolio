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
      $(".fro2_1").removeClass("on");
    }
    if (a >= 800) {
      $(".fro2_1").addClass("on");
      $(".fro2_text").addClass("on");
      $(".fro2_text").css({ display: "block" });
    }
    if (a >= 1100) {
      $(".fro2_2").addClass("on");
      $(".fro2_text").css({ display: "block" });
    }
    if (a >= 1800) {
      $(".fro2_3").addClass("on");
      $(".fro2_text").css({ display: "block" });
    }
    if (a >= 2400) {
      $(".fro2_text").css({ display: "none" });
      $(".fro3_box").addClass("on");
      $(".fro2_3").removeClass("on");
    }
  });
});
