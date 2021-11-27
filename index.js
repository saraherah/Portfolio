function closeMenu() {
  $(".menu__link").click(() => {
    $(".menu").css("visibility", "hidden");
    $(".toggler").prop("checked", false);
  });
}

function openMenu() {
  $(".toggler").click(() => {
    $(".menu").css("visibility", "visible");
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scale-up-center");
    }
  });
});

observer.observe(document.querySelector("#react__icon"));

function main() {
  closeMenu();
  openMenu();
}
main();
