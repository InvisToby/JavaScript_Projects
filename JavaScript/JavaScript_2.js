//challenge 18
function validateForm() {
    var x = document.forms["challForm"]["pname"].value;
    if (x == "") {
      alert("Please write in a name");
      return false;
    }
  }
//assignment 59