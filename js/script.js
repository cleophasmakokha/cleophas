var currentDate = new Date();
var currentYear = currentDate.getFullYear();

function giveName() {
  var name = document.getElementById("yourNames").value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
}

function selectGender() {
  var gender = document.getElementById("gender").value;
  if (gender == "1") {
    alert("Gender must be selected");
    return false;
  }
}

function giveCentury() {
  var century = document.getElementById("centuryBorn").value;
  if (century == "") {
    alert("Century must be filled out");
    return false;
  }
}

function giveYear() {
  var year = document.getElementById("yearBorn").value;
  if (year == "") {
    alert("Year must be filled out");
    return false;
  }
}

function giveMonth() {
  var month = document.getElementById("monthBorn").value;
  if (month == "0") {
    alert("Month must be selected");
    return false;
  }
}

function giveDay() {
  var day = document.getElementById("dayBorn").value;
  if (day == "") {
    alert("Day must be filled out");
    return false;
  }
}
