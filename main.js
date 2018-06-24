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
      sumWindow4.classList.remove('green');
    } catch {}
  }
}

var test = [
  {
    sum: 1,
    currencyPin: "1",
    time: "11:11",
    sourse: "my card1",
    increase: false
  },

  {
    sum: 22,
    currencyPin: "2",
    time: "22:22",
    sourse: "my card2",
    increase: true
  },

  {
    sum: 333,
    currencyPin: "3",
    time: "33:33",
    sourse: "my card1333333333",
    increase: false
  },

  {
    sum: 4444,
    currencyPin: "4",
    time: "44:44",
    sourse: "my card4444",
    increase: true
  },
]

setTimeout(function() {
  lastOperations(test);
}, 1000)
