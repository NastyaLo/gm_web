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

cell_1.focus();
cell_2.focus();
cell_3.focus();
cell_4.focus();

setInterval(function() {
  if (screenInput[0] > -1 && screenInput[0] != undefined) {
    cell_1.value = screenInput[0];
  } /*else if (screenInput[0] == undefined) {
    cell_1.value = " ";
  }*/

  if (screenInput[1] > -1 && screenInput[1] != undefined) {
    cell_2.value = screenInput[1];
  } /*else if (screenInput[1] == undefined) {
    cell_2.value = " ";
  }*/

  if (screenInput[2] > -1 && screenInput[2] != undefined) {
    cell_3.value = screenInput[2];
  }  /*else if (screenInput[2] == undefined) {
    cell_3.value = " ";
  }*/

  if (screenInput[3] > -1 && screenInput[3] != undefined) {
    cell_4.value = screenInput[3];
  }/* else if (screenInput[3] == undefined) {
    cell_4.value = " ";
  }*/
}, 1);

// TODO: сделать считывание input в массив пинкода, из-за input вместо div пофиксить стирание элементов
