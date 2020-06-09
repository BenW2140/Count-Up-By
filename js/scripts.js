$("document").ready(function () {
  $("form#numbers").submit(function(event) {
    event.preventDefault();

    const countTo = parseInt($("input#count-to").val());
    const countBy = parseInt($("input#count-by").val());

    
    for (let i = 0; i <= countTo; i += countBy) {
      $("ul#output").append("<li>" + i + "</li>")
    }

  });
});