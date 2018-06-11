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

var cell      = document.getElementById("screen__cell__input");
var timely    = "";

cell.focus();

one.onclick = function () {
  if (timely.length < 4) {
    timely = cell.value;
    timely += 1;
    cell.value = timely;
  }

  cell.focus();
}

two.onclick = function () {
  if (timely.length < 4) {
    timely = cell.value;
    timely += 2;
    cell.value = timely;
  }

  cell.focus();
}

three.onclick = function () {
  if (timely.length < 4) {
    timely = cell.value;
    timely += 3;
    cell.value = timely;
  }

  cell.focus();
}

four.onclick = function () {
  if (timely.length < 4) {
    timely = cell.value;
    timely += 4;
    cell.value = timely;
  }

  cell.focus();
}

five.onclick = function () {
  if (timely.length < 4) {
    timely = cell.value;
    timely += 5;
    cell.value = timely;
  }

  cell.focus();
}

six.onclick = function () {
  if (timely.length < 4) {
    timely = cell.value;
    timely += 6;
    cell.value = timely;
  }
}

seven.onclick = function () {
  if (timely.length < 4) {
    timely = cell.value;
    timely += 7;
    cell.value = timely;
  }

  cell.focus();
}

eight.onclick = function () {
  if (timely.length < 4) {
    timely = cell.value;
    timely += 8;
    cell.value = timely;
  }

  cell.focus();
}

nine.onclick = function () {
  if (timely.length < 4) {
    timely = cell.value;
    timely += 9;
    cell.value = timely;
  }
}

zero.onclick = function () {
  if (timely.length < 4) {
    timely = cell.value;
    timely += 0;
    cell.value = timely;
  }

  cell.focus();
}

fix.onclick = function () {
  if (timely.length <= 4) {
    timely = cell.value;
    timely = timely.substring(0, timely.length-1);
    cell.value = timely;
  }

  cell.focus();
}

function validate(evt) {//содрано со stackoverflow
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
