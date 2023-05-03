const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// Body color

scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#000101";
    document.body.style.color = "#fefeec";
  } else {
    document.body.style.background = "#fefeec";
    document.body.style.color = "#000101";
  }
});

// Scroll update all pages

document.addEventListener("DOMContentLoaded", function () {
  function ScrollUpdateDelay() {
    setTimeout(function () {
      scroll.update();
    }, 500);
  }

  ScrollUpdateDelay();
});

// Scroll update trigger

function ScrollUpdateTrig() {
  setTimeout(function () {
    scroll.update();
  }, 500);
}
