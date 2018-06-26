function showDetails() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let state = document.getElementById("state").value;
  var genderF = document.getElementById("female").checked;
  var genderM = document.getElementById("male").checked;

  document.getElementById("dataFname").innerHTML = fname;
  document.getElementById("dataLname").innerHTML = lname;
  document.getElementById("dataState").innerHTML = state;

  if (genderF == true) {
    document.getElementById("dataGender").innerHTML = "Female";
  } else if (genderM == true) {
    document.getElementById("dataGender").innerHTML = "Male";
  }

  document.getElementById("fname").value = " ";
  document.getElementById("lname").value = " ";
  document.getElementById("state").value = " ";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;

  document.getElementById("edit").style.display = "block";
}

function edit() {
  document.getElementById("fname").value = document.getElementById(
    "dataFname"
  ).innerHTML;
  document.getElementById("lname").value = document.getElementById(
    "dataLname"
  ).innerHTML;
  document.getElementById("state").value = document.getElementById(
    "dataState"
  ).innerHTML;
  let gender = document.getElementById("dataGender").innerHTML;
  if (gender == "Male") {
    document.getElementById("male").checked = true;
  } else document.getElementById("female").checked = true;
}
