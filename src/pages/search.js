document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function() {
      var filter = input.value.toLowerCase();
      var rows = document.querySelectorAll("#myTable tr");
      rows.forEach(function(row) {
        var text = row.textContent.toLowerCase();
        if (text.indexOf(filter) > -1) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
  