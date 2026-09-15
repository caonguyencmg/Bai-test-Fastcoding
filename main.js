const links = document.querySelectorAll("[data-page]");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const page = link.dataset.page;

    // Xóa active toàn bộ menu
    document.querySelectorAll("[data-page]").forEach((item) => {
      item.classList.remove("active");
    });

    // Active tất cả item cùng page
    document.querySelectorAll(`[data-page="${page}"]`).forEach((item) => {
      item.classList.add("active");
    });

    // Đóng menu mobile nếu đang mở
    if (typeof hideMenu === "function") {
      hideMenu();
    }
  });
});

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  mobileOverlay.classList.add("active");
});

function hideMenu() {
  mobileMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
}

closeMenu.addEventListener("click", hideMenu);
mobileOverlay.addEventListener("click", hideMenu);

document.querySelectorAll(".mobile-menu a").forEach((item) => {
  item.addEventListener("click", hideMenu);
});

const testimonialMain = document.querySelector(".testimonial-main");
var isReverse = false;

$(".next").click(function () {
  testimonialMain.classList.remove("slide-next", "slide-prev");
  void testimonialMain.offsetWidth;
  if (isReverse) {
    isReverse = false;
    testimonialMain.classList.remove("reverse");
    testimonialMain.classList.add("slide-next");
    $(".testimonial-main .testimonial-description").text(
      "We make sure you have a fine distance with the sickness. We make you never lose hope.",
    );
    $(".testimonial-main .testimonial-description1").text(
      "We make sure you have with the sickness.",
    );
  } else {
    isReverse = true;
    $(".testimonial-main .testimonial-description").text(
      "We provide you with the best care and support throughout your journey.",
    );
    $(".testimonial-main .testimonial-description1").text("");
    testimonialMain.classList.add("reverse");
    testimonialMain.classList.add("slide-next");
  }
});

$(".prev").click(function () {
  testimonialMain.classList.remove("slide-next", "slide-prev");
  void testimonialMain.offsetWidth;
  if (isReverse) {
    isReverse = false;
    testimonialMain.classList.remove("reverse");
    testimonialMain.classList.add("slide-prev");
    $(".testimonial-main .testimonial-description").text(
      "We make sure you have a fine distance with the sickness. We make you never lose hope.",
    );
    $(".testimonial-main .testimonial-description1").text(
      "We make sure you have with the sickness.",
    );
  } else {
    isReverse = true;
    $(".testimonial-main .testimonial-description").text(
      "We provide you with the best care and support throughout your journey.",
    );
    $(".testimonial-main .testimonial-description1").text("");

    testimonialMain.classList.add("reverse");
    testimonialMain.classList.add("slide-prev");
  }
});
