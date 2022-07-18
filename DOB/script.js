var year = document.getElementById("yearselect");
var month = document.getElementById("monthselect");
var date = document.getElementById("dateselect");
var retire = document.getElementById("retirement");
var boxs = document.getElementById("boxes");
var body = document.querySelector(".body");
years();
months();
var yearend;
var yearends;
var opt1;
var opt2;
var opt3;
var dob;
var remover;
var today;
var retireingDate;

function years() {
  opt1 = document.createElement("option");
  opt1.innerText = "YYYY";
  year.append(opt1);
  for (let i = 1972; i <= 2022; i++) {
    yearappend();
    function yearappend() {
      opt1 = document.createElement("option");
      opt1.innerText = i;
      year.append(opt1);
      return opt1;
    }
  }
}
function months() {
  opt2 = document.createElement("option");
  opt2.innerText = "MM";
  month.append(opt2);
  for (let j = 1; j <= 12; j++) {
    monthappend();
    function monthappend() {
      opt2 = document.createElement("option");
      opt2.innerText = j;
      month.append(opt2);
      return opt2;
    }
  }
}

date.addEventListener("click", days);
function days() {
  remover = document.querySelectorAll(".date");
  remover.forEach(data);
  function data(one) {
    one.remove();
  }
  if (
    month.value == 3 ||
    month.value == 1 ||
    month.value == 5 ||
    month.value == 7 ||
    month.value == 8 ||
    month.value == 10 ||
    month.value == 12
  ) {
    for (let a = 1; a <= 31; a++) {
      daysappend1();
      function daysappend1() {
        opt3 = document.createElement("option");
        opt3.setAttribute("class", "date");
        opt3.innerText = a;
        console.log(opt3);
        date.append(opt3);
      }
    }
  } else if (
    month.value == 4 ||
    month.value == 6 ||
    month.value == 9 ||
    month.value == 11
  ) {
    for (let b = 1; b <= 30; b++) {
      daysappend2();
      function daysappend2() {
        opt3 = document.createElement("option");
        opt3.setAttribute("class", "date");
        opt3.innerText = b;
        console.log(opt3);
        date.append(opt3);
      }
    }
  } else if (month.value == 2) {
    if (year.value % 4 == 0) {
      for (let c = 1; c <= 29; c++) {
        daysappend3();
        function daysappend3() {
          opt3 = document.createElement("option");
          opt3.setAttribute("class", "date");
          opt3.innerText = c;
          console.log(opt3);
          date.append(opt3);
        }
      }
    } else {
      for (let d = 1; d <= 28; d++) {
        daysappend3();
        function daysappend3() {
          opt3 = document.createElement("option");
          opt3.setAttribute("class", "date");
          opt3.innerText = d;
          console.log(opt3);
          date.append(opt3);
        }
      }
    }
  }
  dob = new Date(
    parseInt(year.value),
    parseInt(month.value),
    parseInt(date.value)
  );
  console.log(dob);
  today = new Date();
  console.log(today);
}
var retireAge = document.createElement("select");
retireAge.setAttribute("class", "sub");

retirement.append(retireAge);
console.log(retirement);
retriringAge();
function retriringAge() {
  var opt4 = document.createElement("option");
  opt4.innerText = "AGE";
  retireAge.append(opt4);
  for (let i = 45; i <= 65; i++) {
    var opt4 = document.createElement("option");
    opt4.innerText = i;
    retireAge.append(opt4);
  }
  var btn = document.createElement("button");
  btn.innerText = "Submit";
  retire.append(btn);
  console.log(retire);
  btn.addEventListener("click", calculator);
  function calculator() {
    retireingDate = document.querySelector(".sub");
    ageofretirement = new Date(
      parseInt(year.value) + parseInt(retireingDate.value),
      parseInt(month.value),
      parseInt(date.value)
    );
    console.log(ageofretirement);
    creatingBox();
    function creatingBox() {
      yearend = parseInt(prompt("Enter the number of day left"));
      var currentyear = document.createElement("div");
      currentyear.innerText = year.value;
      boxs.append(currentyear);
      for (i = 1; i <= yearend; i++) {
        var box = document.createElement("div");
        box.setAttribute("class", "redboxs");
        box.setAttribute(
          "style",
          " display: inline-block;background-color:red;width:10px;height:10px;border:2px solid;margin-left:2px;"
        );
        boxs.append(box);
      }
    }
    secondaryboxes();
    function secondaryboxes() {
      for (let i = parseInt(year.value) + 1; i <= today.getFullYear(); i++) {
        var spentYears = document.createElement("div");
        spentYears.setAttribute("class", "spentyears");
        creatingSecondarybox();
        newdata = i;
        function creatingSecondarybox(newdata) {
          if (newdata % 4 == 0) {
            var currentyear = document.createElement("div");
            currentyear.innerText = newdata;
            boxs.append(currentyear);
            for (j = 1; j <= 366; j++) {
              var box = document.createElement("div");
              box.setAttribute("class", "redboxs");
              box.setAttribute(
                "style",
                " background-color:red;width:10px;height:10px;border:2px solid;margin-left:2px;"
              );

              boxs.append(box);
              spentYears.append(boxs);
            }
          } else {
            var currentyear = document.createElement("div");
            currentyear.innerText = i;
            boxs.append(currentyear);
            for (j = 1; j <= 365; j++) {
              var box = document.createElement("div");
              box.setAttribute("class", "redboxs");
              box.setAttribute(
                "style",
                " display: inline-block;background-color:red;width:10px;height:10px;border:2px solid;margin-left:2px;"
              );
              boxs.append(box);
              spentYears.append(boxs);
            }
          }
        }
      }
      body.append(spentYears);
    }
    thirdboxes();
    function thirdboxes() {
      for (
        let i = today.getFullYear();
        i <= ageofretirement.getFullYear() - 1;
        i++
      ) {
        var spentYears = document.createElement("div");
        spentYears.setAttribute("class", "spentyears");
        creatingSecondarybox();
        newdata = i;
        function creatingSecondarybox(newdata) {
          if (newdata % 4 == 0) {
            var currentyear = document.createElement("div");
            currentyear.innerText = newdata;
            boxs.append(currentyear);
            for (j = 1; j <= 366; j++) {
              var box = document.createElement("div");
              box.setAttribute("class", "redboxs");
              box.setAttribute(
                "style",
                " background-color:green;width:10px;height:10px;border:2px solid;margin-left:2px;"
              );

              boxs.append(box);
              spentYears.append(boxs);
            }
          } else {
            var currentyear = document.createElement("div");
            currentyear.innerText = i;
            boxs.append(currentyear);
            for (j = 1; j <= 365; j++) {
              var box = document.createElement("div");
              box.setAttribute("class", "redboxs");
              box.setAttribute(
                "style",
                " display: inline-block;background-color:green;width:10px;height:10px;border:2px solid;margin-left:2px;"
              );
              boxs.append(box);
              spentYears.append(boxs);
            }
          }
        }
      }
      body.append(spentYears);
    }
    creating2ndBox();
    function creating2ndBox() {
      var spentYears = document.createElement("div");
      spentYears.setAttribute("class", "spentyears");
      yearends = parseInt(prompt("Enter the number of days"));
      var currentyear = document.createElement("div");
      currentyear.innerText = ageofretirement.getFullYear();
      boxs.append(currentyear);
      if (ageofretirement.getFullYear() % 4 == 0) {
        for (i = 1; i <= 366 - yearends; i++) {
          var box = document.createElement("div");
          box.setAttribute("class", "redboxs");
          box.setAttribute(
            "style",
            " display: inline-block;background-color:green;width:10px;height:10px;border:2px solid;margin-left:2px;"
          );
          boxs.append(box);
          spentYears.append(boxs);
        }
      } else {
        for (i = 1; i <= 365 - yearends; i++) {
          var box = document.createElement("div");
          box.setAttribute("class", "redboxs");
          box.setAttribute(
            "style",
            " display: inline-block;background-color:green;width:10px;height:10px;border:2px solid;margin-left:2px;"
          );
          boxs.append(box);
          spentYears.append(boxs);
        }
      }
      body.append(spentYears);
    }
  }
}
