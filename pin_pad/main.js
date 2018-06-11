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

var screenInput = "";
console.log(screenInput.length);

one.onclick = function () {
  if (screenInput.length < 4) {
    screenInput += 1;
  }
}

two.onclick = function () {
  if (screenInput.length < 4) {
    screenInput += 2;
  }
}

three.onclick = function () {
  if (screenInput.length < 4) {
    screenInput += 3;
  }
}

four.onclick = function () {
  if (screenInput.length < 4) {
    screenInput += 4;
  }
}

five.onclick = function () {
  if (screenInput.length < 4) {
    screenInput += 5;
  }
}

six.onclick = function () {
  if (screenInput.length < 4) {
    screenInput += 6;
  }
}

seven.onclick = function () {
  if (screenInput.length < 4) {
    screenInput += 7;
  }
}

eight.onclick = function () {
  if (screenInput.length < 4) {
    screenInput += 8;
  }
}

nine.onclick = function () {
  if (screenInput.length < 4) {
    screenInput += 9;
  }
}

zero.onclick = function () {
  if (screenInput.length < 4) {
    screenInput += 0;
  }
}

fix.onclick = function () {
  if (screenInput.length > 0) {
    screenInput = screenInput.substring(0, 3);
  }
}

cell.focus();

setInterval(function() {
  cell.value = screenInput.toString();
}, 10);//почему-то удаляет все к хуям при обновлении
// потому что из инпута не заносит в переменную

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

// TODO: сделать считывание input в массив пинкода
// из-за input вместо div пофиксить стирание элементов
