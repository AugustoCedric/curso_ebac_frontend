$(document).ready(function () {
  $("#input").change(function () {
    var input = $(this).val();
    $("ul").append(
      "<li>" +
        input +
        '<i class="fas fa-check"></i><i class="fas fa-trash"></i></li>'
    );
    $(this).val();
    $("#input").val('');
  });

  $("ul").on("click", ".fa-trash", function () {
    $(this).parents("li").fadeOut(200);
  });

  $("ul").on("click", ".fa-check", function () {
    $(this).parents("li").toggleClass("checked");
  });
});
