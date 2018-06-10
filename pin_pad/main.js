var one       = document.getElementsByClassName("screen__button--1"),
    two       = document.getElementsByClassName("screen__button--2"),
    three     = document.getElementsByClassName("screen__button--3"),
    four      = document.getElementsByClassName("screen__button--4"),
    five      = document.getElementsByClassName("screen__button--5"),
    six       = document.getElementsByClassName("screen__button--6"),
    seven     = document.getElementsByClassName("screen__button--7"),
    eight     = document.getElementsByClassName("screen__button--8"),
    nine      = document.getElementsByClassName("screen__button--9"),
    zero      = document.getElementsByClassName("screen__button--0"),
    fix       = document.getElementsByClassName("screen__button__arrow");

var cell_1      = document.getElementsByClassName("screen__cell--1"),
    cell_2      = document.getElementsByClassName("screen__cell--2"),
    cell_3      = document.getElementsByClassName("screen__cell--3"),
    cell_4      = document.getElementsByClassName("screen__cell--4");

var screenInput = [];
console.log(screenInput.lenght);

one.onclick = function () {
  if (screenInput.lenght < 4) {
    screenInput.push(1);
    console.log("1");
  }
} 

two.onclick = function () {
  if (screenInput.lenght < 4) {
    screenInput.push(2);
  }
}

three.onclick = function () {
  if (screenInput.lenght < 4) {
    screenInput.push(3);
  }
}

four.onclick = function () {
  if (screenInput.lenght < 4) {
    screenInput.push(4);
  }
}

five.onclick = function () {
  if (screenInput.lenght < 4) {
    screenInput.push(5);
  }
}

six.onclick = function () {
  if (screenInput.lenght < 4) {
    screenInput.push(6);
  }
}

seven.onclick = function () {
  if (screenInput.lenght < 4) {
    screenInput.push(7);
  }
}

eight.onclick = function () {
  if (screenInput.lenght < 4) {
    screenInput.push(8);
  }
}

nine.onclick = function () {
  if (screenInput.lenght < 4) {
    screenInput.push(9);
  }
}

zero.onclick = function () {
  if (screenInput.lenght < 4) {
    screenInput.push(0);
  }
}

fix.onclick = function () {
  if (screenInput.lenght > 0) {
    screenInput.pop;
  }
}

if (screenInput.lenght != 0) {
  setInterval (function() {
    if (screenInput[0] > 0) {
      cell_1.innerHTML = screenInput[0];
    }

    if (screenInput[1] > 0) {
      cell_2.innerHTML = screenInput[1];
    }

    if (screenInput[2] > 0) {
      cell_3.innerHTML = screenInput[3];
    }

    if (screenInput[3] > 0) {
      cell_4.innerHTML = screenInput[4];
    }

  }, 1000);
}
