//JavaScript for ATM

var money               = document.getElementById('money'),
    cardNumber          = document.getElementById('card__number'),
    ownerName           = document.getElementById('owner-name'),
    sumWindow1          = document.getElementById('sumWindow1'),
    currencyPinWindow1  = document.getElementById('currencyPinWindow1'),
    timeWindow1         = document.getElementById('timeWindow1'),
    sourseWindow1       = document.getElementById('sourseWindow1'),
    sumWindow2          = document.getElementById('sumWindow2'),
    currencyPinWindow2  = document.getElementById('currencyPinWindow2'),
    timeWindow2         = document.getElementById('timeWindow2'),
    sourseWindow2       = document.getElementById('sourseWindow2'),
    sumWindow3          = document.getElementById('sumWindow3'),
    currencyPinWindow3  = document.getElementById('currencyPinWindow3'),
    timeWindow3         = document.getElementById('timeWindow3'),
    sourseWindow3       = document.getElementById('sourseWindow3'),
    sumWindow4          = document.getElementById('sumWindow4'),
    currencyPinWindow4  = document.getElementById('currencyPinWindow4'),
    timeWindow4         = document.getElementById('timeWindow4'),
    sourseWindow4       = document.getElementById('sourseWindow4');

function changeBill(sum) {
  money.innerHTML = sum;
  sum = sum.toString();
  if (sum.length > 7) {
    money.classList.add("fs-25");
  } else {
    money.classList.add("fs-40");
  }
}

function changeNumber(number) {
  //if (number.length == 16) {} проверка на длину
  cardNumber.innerHTML = number.substring(0, 4) + " " + number.substring(4, 8) + " " + number.substring(8, 12) + " " + number.substring(12, 16);
}

function changeName(name) {
  ownerName.innerHTML = name;
}

// Вид массива для последних операций
// [
//   operation1 {
//     sum: 100,
//     currencyPin: "$",
//     time: "16:10",
//     sourse: "Withdrawals from ATM",
//     increase: true
//   },
//
//   operation2 {
//     sum: 100,
//     currencyPin: "$",
//     time: "16:10",
//     sourse: "Withdrawals from ATM",
//     increase: false
//   }
// ]

function lastOperations() {
  sumWindow1.innerHTML          = arguments[0][0].sum;
  currencyPinWindow1.innerHTML  = arguments[0][0].currencyPin;
  timeWindow1.innerHTML         = arguments[0][0].time;
  sourseWindow1.innerHTML       = arguments[0][0].sourse;

  if (arguments[0][0].increase) {
    sumWindow1.classList.add('green');
    try {
      sumWindow1.classList.remove('red');
    } catch {}
  } else {
    sumWindow1.classList.add('red');
    try {
      sumWindow1.classList.remove('green');
    } catch {}
  }

  sumWindow2.innerHTML          = arguments[0][1].sum;
  currencyPinWindow2.innerHTML  = arguments[0][1].currencyPin;
  timeWindow2.innerHTML         = arguments[0][1].time;
  sourseWindow2.innerHTML       = arguments[0][1].sourse;

  if (arguments[0][1].increase) {
    sumWindow2.classList.add('green');
    try {
      sumWindow2.classList.remove('red');
    } catch {}
  } else {
    sumWindow2.classList.add('red');
    try {
      sumWindow2.classList.remove('green');
    } catch {}
  }

  sumWindow3.innerHTML          = arguments[0][2].sum;
  currencyPinWindow3.innerHTML  = arguments[0][2].currencyPin;
  timeWindow3.innerHTML         = arguments[0][2].time;
  sourseWindow3.innerHTML       = arguments[0][2].sourse;

  if (arguments[0][2].increase) {
    sumWindow3.classList.add('green');
    try {
      sumWindow3.classList.remove('red');
    } catch {}
  } else {
    sumWindow3.classList.add('red');
    try {
      sumWindow3.classList.remove('green');
    } catch {}
  }

  sumWindow4.innerHTML          = arguments[0][3].sum;
  currencyPinWindow4.innerHTML  = arguments[0][3].currencyPin;
  timeWindow4.innerHTML         = arguments[0][3].time;
  sourseWindow4.innerHTML       = arguments[0][3].sourse;

  if (arguments[0][3].increase) {
    sumWindow4.classList.add('green');
    try {
      sumWindow4.classList.remove('red');
    } catch {}
  } else {
    sumWindow4.classList.add('red');
    try {
      sumWindow4classList.remove('green');
    } catch {}
  }
}

//JavaScript for PinPad

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

var cell1               = document.getElementById("screen__cell--1"),
    cell2               = document.getElementById("screen__cell--2"),
    cell3               = document.getElementById("screen__cell--3"),
    cell4               = document.getElementById("screen__cell--4"),
    wrongPassword       = document.getElementById("wrong"),
    screenPanel         = document.getElementById("screen-panel"),
    pin                 = "";

cell1.focus();

one.onclick = function() {
  if(cell1.value === "") {
    cell1.value = 1;
    cell2.focus();
  } else if (cell2.value === "") {
    cell2.value = 1;
    cell3.focus();
  } else if (cell3.value === "") {
    cell3.value = 1;
    cell4.focus();
  } else if (cell4.value === "") {
    cell4.value = 1;
    cell4.focus();
  }
}

two.onclick = function() {
  if(cell1.value === "") {
    cell1.value = 2;
    cell2.focus();
  } else if (cell2.value === "") {
    cell2.value = 2;
    cell3.focus();
  } else if (cell3.value === "") {
    cell3.value = 2;
    cell4.focus();
  } else if (cell4.value === "") {
    cell4.value = 2;
    cell4.focus();
  }
}

three.onclick = function() {
  if(cell1.value === "") {
    cell1.value = 3;
    cell2.focus();
  } else if (cell2.value === "") {
    cell2.value = 3;
    cell3.focus();
  } else if (cell3.value === "") {
    cell3.value = 3;
    cell4.focus();
  } else if (cell4.value === "") {
    cell4.value = 3;
    cell4.focus();
  }
}

four.onclick = function() {
  if(cell1.value === "") {
    cell1.value = 4;
    cell2.focus();
  } else if (cell2.value === "") {
    cell2.value = 4;
    cell3.focus();
  } else if (cell3.value === "") {
    cell3.value = 4;
    cell4.focus();
  } else if (cell4.value === "") {
    cell4.value = 4;
    cell4.focus();
  }
}

five.onclick = function() {
  if(cell1.value === "") {
    cell1.value = 5;
    cell2.focus();
  } else if (cell2.value === "") {
    cell2.value = 5;
    cell3.focus();
  } else if (cell3.value === "") {
    cell3.value = 5;
    cell4.focus();
  } else if (cell4.value === "") {
    cell4.value = 5;
    cell4.focus();
  }
}

six.onclick = function() {
  if(cell1.value === "") {
    cell1.value = 6;
    cell2.focus();
  } else if (cell2.value === "") {
    cell2.value = 6;
    cell3.focus();
  } else if (cell3.value === "") {
    cell3.value = 6;
    cell4.focus();
  } else if (cell4.value === "") {
    cell4.value = 6;
    cell4.focus();
  }
}

seven.onclick = function() {
  if(cell1.value === "") {
    cell1.value = 7;
    cell2.focus();
  } else if (cell2.value === "") {
    cell2.value = 7;
    cell3.focus();
  } else if (cell3.value === "") {
    cell3.value = 7;
    cell4.focus();
  } else if (cell4.value === "") {
    cell4.value = 7;
    cell4.focus();
  }
}

eight.onclick = function() {
  if(cell1.value === "") {
    cell1.value = 8;
    cell2.focus();
  } else if (cell2.value === "") {
    cell2.value = 8;
    cell3.focus();
  } else if (cell3.value === "") {
    cell3.value = 8;
    cell4.focus();
  } else if (cell4.value === "") {
    cell4.value = 8;
    cell4.focus();
  }
}

nine.onclick = function() {
  if(cell1.value === "") {
    cell1.value = 9;
    cell2.focus();
  } else if (cell2.value === "") {
    cell2.value = 9;
    cell3.focus();
  } else if (cell3.value === "") {
    cell3.value = 9;
    cell4.focus();
  } else if (cell4.value === "") {
    cell4.value = 9;
    cell4.focus();
  }
}

zero.onclick = function() {
  if(cell1.value === "") {
    cell1.value = 0;
    cell2.focus();
  } else if (cell2.value === "") {
    cell2.value = 0;
    cell3.focus();
  } else if (cell3.value === "") {
    cell3.value = 0;
    cell4.focus();
  } else if (cell4.value === "") {
    cell4.value = 0;
    cell4.focus();
  }
}

function correction() {
  if (cell1.value && cell2.value && cell3.value && cell4.value) {
    cell4.value = "";
    cell4.focus();
  } else if (cell1.value && cell2.value && cell3.value) {
    cell3.value = "";
    cell3.focus();
  } else if (cell1.value && cell2.value) {
    cell2.value = "";
    cell2.focus();
  } else if (cell1.value) {
    cell1.value = "";
    cell1.focus();
  }
}

fix.onclick = function() {
  correction();
}

document.onkeydown = function(e){
	if (e.keyCode == 8) {
        	e.preventDefault();
		correction();
	}else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)){
		if (cell1.value && cell2.value && cell3.value) {
		  cell4.focus();
		} else if (cell1.value && cell2.value) {
		  cell3.focus();
		} else if (cell1.value){
		  cell2.focus();
		} else {
		  cell1.focus();
		}
	}
};

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

function checkPassword (pin) {
  if (pin) {
    nextScreen();
    screenPanel.classList.remove("red-s");
    wrongPassword.classList.remove("open");
    cell1.classList.remove("red-b");
    cell2.classList.remove("red-b");
    cell3.classList.remove("red-b");
    cell4.classList.remove("red-b");
  } else {
    screenPanel.classList.add("red-s");
    wrongPassword.classList.add("open");
    cell1.classList.add("red-b");
    cell2.classList.add("red-b");
    cell3.classList.add("red-b");
    cell4.classList.add("red-b");
  }
}

function checkActivity(cardNumber) {
  if (!cardNumber) {
    locked.classList.add("open");
    cell1.classList.add("red-b");
    cell2.classList.add("red-b");
    cell3.classList.add("red-b");
    cell4.classList.add("red-b");
    screenPanel.classList.add("red-s");
  } else {
    locked.classList.remove("open");
    screenPanel.classList.remove("red-s");
    cell1.classList.remove("red-b");
    cell2.classList.remove("red-b");
    cell3.classList.remove("red-b");
    cell4.classList.remove("red-b");
  }
}

//JavaScript to change screens

var ATMBody        = document.getElementById("ATM__body"),
    PinPadBody     = document.getElementById("pinpad__body"),
    next           = document.getElementById("ok");

next.onclick = function nextScreen() {
  PinPadBody.classList.add("pinpadOff");
  ATMBody.classList.add("atmOn");
}
