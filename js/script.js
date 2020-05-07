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

function digits(input){
  var digits = /[^0-9]/;
  input.value = input.value.replace(digits, "");
}

function digits(input){
  var digits = /[^0-9]/;
  input.value = input.value.replace(digits, "");
}

function validYear(){
  var year = document.getElementById('yearBorn').value;
  if (year < 1899 || year > currentYear) {
    alert("Invalid Year");
    return false;
  }
}

function validDay(){
  var thirtyOneMonths = [1, 3, 5, 7, 9, 10, 12];
  var monthNumber = parseInt(document.getElementById("monthBorn").value);
  var dayNumber = parseInt(document.getElementById("dayBorn").value);
  var yearNumber = parseInt(document.getElementById("yearBorn").value);
  var yearNumber = parseInt(document.getElementById("centuryBorn").value);
  var a = yearNumber % 100;
  var b = yearNumber % 400;
  var c = yearNumber % 4;
  var d = thirtyOneMonths.includes(monthNumber);
