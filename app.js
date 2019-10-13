$(document).ready(() => {
  let tasks = 0;

  $(".btn-add").click(() => {
    tasks++;
    $("ul").append(`<li style="display: none">Task number ${tasks}</li>`);
    $("ul li:last-child").show('slow');
  });

  $(".btn-remove").click(() => {
    if (tasks > 0) {
        $("ul li:last-child").slideUp('fast', () => {$("ul li:last-child").remove();
        tasks--;});
    };
  });

  $(".btn-clear").click(() => {
    $("ul").empty();
    tasks = 0;
  });
});
