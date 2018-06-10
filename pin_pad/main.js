var one       = document.getElementById("screen__button--1"),
    two       = document.getElementById("screen__button--2"),
    three     = document.getElementById("screen__button--3"),
    four      = document.getElementById("screen__button--4"),
    five      = document.getElementById("screen__button--5"),
    six       = document.getElementById("screen__button--6"),
    seven     = document.getElementById("screen__button--7"),
    eight     = document.getElementById("screen__button--8"),
    nine      = document.getElementById("screen__button--9"),
    zero      = document.getElementById("screen__button--0"),
    fix       = document.getElementById("screen__button__arrow");

var cell_1      = document.getElementById("screen__cell--1"),
    cell_2      = document.getElementById("screen__cell--2"),
    cell_3      = document.getElementById("screen__cell--3"),
    cell_4      = document.getElementById("screen__cell--4");

var screenInput = [];
console.log(screenInput.length);

one.onclick = function () {
  if (screenInput.length < 4) {
    screenInput.push(1);
  }
}

two.onclick = function () {
  if (screenInput.length < 4) {
    screenInput.push(2);
  }
}

three.onclick = function () {
  if (screenInput.length < 4) {
    screenInput.push(3);
  }
}

four.onclick = function () {
  if (screenInput.length < 4) {
    screenInput.push(4);
  }
}

five.onclick = function () {
  if (screenInput.length < 4) {
    screenInput.push(5);
  }
}

six.onclick = function () {
  if (screenInput.length < 4) {
    screenInput.push(6);
  }
}

seven.onclick = function () {
  if (screenInput.length < 4) {
    screenInput.push(7);
  }
}

eight.onclick = function () {
  if (screenInput.length < 4) {
    screenInput.push(8);
  }
}

nine.onclick = function () {
  if (screenInput.length < 4) {
    screenInput.push(9);
  }
}

zero.onclick = function () {
  if (screenInput.length < 4) {
    screenInput.push(0);
  }
}

fix.onclick = function () {
  if (screenInput.length > 0) {
    screenInput.pop();
  }
}

setInterval(function() {
  if (screenInput[0] > 0 && screenInput[0] != undefined) {
    cell_1.innerHTML = screenInput[0];
  } else if (screenInput[0] == undefined) {
    cell_1.innerHTML = " ";
  }

  if (screenInput[1] > 0 && screenInput[1] != undefined) {
    cell_2.innerHTML = screenInput[1];
  } else if (screenInput[1] == undefined) {
    cell_2.innerHTML = " ";
  }

  if (screenInput[2] > 0 && screenInput[2] != undefined) {
    cell_3.innerHTML = screenInput[2];
  }  else if (screenInput[2] == undefined) {
    cell_3.innerHTML = " ";
  }

  if (screenInput[3] > 0 && screenInput[3] != undefined) {
    cell_4.innerHTML = screenInput[3];
  } else if (screenInput[3] == undefined) {
    cell_4.innerHTML = " ";
  }
}, 1);
