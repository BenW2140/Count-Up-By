$("document").ready(function () {
  $("form#numbers").submit(function(event) {
    event.preventDefault();

    const countTo = parseInt($("input#count-to").val());
    const countBy = parseInt($("input#count-by").val());

    console.log(`Count to: ${countTo} Count by: ${countBy}`);

    for (let i = 0; i <= countTo; i += countBy) {
      
    }

  });
});