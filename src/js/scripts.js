// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const introSwiper = new Swiper(".intro-swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".intro-swiper-button-next",
    prevEl: ".intro-swiper-button-prev",
  },
});

function Tabs() {
  let bindAll = function () {
    let menuElements = document.querySelectorAll("[data-tab]");
    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener("click", change, false);
    }
  };

  let clear = function () {
    let menuElements = document.querySelectorAll("[data-tab]");
    for (let i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove("active");
      let id = menuElements[i].getAttribute("data-tab");
      document.getElementById(id).classList.remove("active");
    }
  };

  let change = function (e) {
    clear();
    e.target.classList.add("active");
    e.preventDefault();
    let id = e.currentTarget.getAttribute("data-tab");
    document.getElementById(id).classList.add("active");
  };

  bindAll();
}

let connectTabs = new Tabs();
