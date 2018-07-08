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

var cell1      = document.getElementById("screen__cell--1"),
    cell2      = document.getElementById("screen__cell--2"),
    cell3      = document.getElementById("screen__cell--3"),
    cell4      = document.getElementById("screen__cell--4");

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
