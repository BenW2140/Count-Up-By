$("document").ready(function () {
  $("form#numbers").submit(function(event) {
    event.preventDefault();

    const countTo = parseInt($("input#count-to").val());
    const countBy = parseInt($("input#count-by").val());

    if (countTo <= 0 || countTo === NaN) {
      alert("Please enter a positive number!");
    } else if (countBy >= countTo) {
      alert("We can't count to a number by a larger number than we are counting to!");
    } else {
      for (let i = 0; i <= countTo; i += countBy) {
        $("ul#output").append("<li>" + i + "</li>")
      }
    }
  });
});