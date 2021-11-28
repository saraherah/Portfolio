function closeMenu() {
  $(".menu__link").click(() => {
    $(".menu").css("visibility", "hidden");
    $(".toggler").prop("checked", false);
  });
}

function openMenu() {
  $(".toggler").click(() => {
    let atLeastOneIsChecked = $("#menu__toggler:checkbox:checked").length > 0;

    if (atLeastOneIsChecked) {
      $(".menu").css("visibility", "visible");
    } else {
      $(".menu").css("visibility", "hidden");
    }
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

function main() {
  closeMenu();
  openMenu();
  openProject();
  closeProject();
}
main();
