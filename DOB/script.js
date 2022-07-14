var year = document.getElementById("yearselect");
var month = document.getElementById("monthselect");
var date = document.getElementById("dateselect");
years();
months();
var opt1;
var opt2;
var opt3;
var remover;

function years() {
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
}
