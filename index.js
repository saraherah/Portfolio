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

function openProject() {
  $("#image__one").click(() => {
    $("#project__one").css("display", "flex");
  });
  $("#image__two").click(() => {
    $("#project__two").css("display", "flex");
  });
  $("#image__three").click(() => {
    $("#project__three").css("display", "flex");
  });
}

function closeProject() {
  $("#close__one").click(() => {
    $("#project__one").css("display", "none");
  });
  $("#close__two").click(() => {
    $("#project__two").css("display", "none");
  });
  $("#close__three").click(() => {
    $("#project__three").css("display", "none");
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
  openProject();
  closeProject()
}
main();
