var inp = $("#CalcDisp")
var oper = "";
var a = null;
var b = null;
var res = null;
var lastOper = "number";

function resetForm() {						//очистка формы 
    inp.val("");
    oper = "";
    a = b = res = null;
    lastOper = "number";
};
function clickNumber(x) {
    if (lastOper == "number" && b === null) {
        inp.val(inp.val() + x);
        a = inp.val();
        lastOper = "number";
    } else if (lastOper !== "number") {
            inp.val("");
            inp.val(inp.val() + x);
            b = inp.val();
            lastOper = "number";
        } else {
            inp.val(inp.val() + x);
            b = inp.val();
            lastOper = "number";
        }
};

function plus() {                             //суммирование
    if (a === null && b === null) {
        alert("Сначала нужно ввести число");
    } else {
        if (lastOper == "number" && a !== null && b !== null) {
            equal();
            oper = "+";    
        } else {
            a = inp.val();
            oper = "+";
            lastOper = "+";
            return oper;
        }
    }
};

function minus() {                                 //вычитание
    if (a === null && b === null) {
        alert("Сначала нужно ввести число");
    } else {
        if (lastOper == "number" && a !== null && b !== null) {
            equal();
            oper = "-";    
        } else {
            a = inp.val();
            oper = "-";
            lastOper = "-";
            return oper;
        }
    }
};
  
function multiply() {                             //умножение
    if (a === null && b === null) {
        alert("Сначала нужно ввести число");
    } else {
        if (lastOper == "number" && a !== null && b !== null) {
            equal();
            oper = "*";    
        } else {
            a = inp.val();
            oper = "*";
            lastOper = "*";
            return oper;
        }
    }
};
            
function divide() {                                   //деление
    if (a === null && b === null) {
        alert("Сначала нужно ввести число");
    } else {
        if (lastOper == "number" && a !== null && b !== null) {
            equal();
            oper = "/";    
        } else {
            a = inp.val();
            oper = "/";
            lastOper = "/";
            return oper;
        }
    }
};
            
function equal() {
    if (a === null && b === null) {
        alert("Некорректный ввод");
    } else {
        lastOper = "=";
        switch (oper) {
          case "+":
            res = (+a + +b);
            a = res;
            inp.val(a); 
            return a;
            break;
          case "-":
            res = (+a - +b);
            a = res;
            inp.val(a); 
            break;
          case "*":
            res = (+a * +b);
            a = res;
            inp.val(a); 
            break;
          case "/":
            if (b == 0) {
                alert("На ноль делить нельзя. Потому что так сказал калькулятор.");
                resetForm();
                break;
            } else {
                res = (+a / +b);
                a = res;
                inp.val(a); 
                break;
            }
          default:
            alert("Некорректный ввод");
        }
    }
};

function negativNum () {                    //отрицательное число
    if (a !== null && b === null) {
        inp.val(inp.val() * (-1));
        a = inp.val();
    } else if (a !== null && b !== null && lastOper == "=") {
        inp.val(inp.val() * (-1));
        a = inp.val();
} else if (a !== null && b !== null && res !== a) {
        inp.val(inp.val() * (-1));
        b = inp.val();
} else {
    alert("Некорректный ввод");
}
};

function clickPoint() {
    var x = ".";
    if (a === null || a !== null && b !== null && lastOper == "=") {
        inp.val(0 + '.');
        a = inp.val();
        lastOper = "number";
    } else {
        if (inp.val().indexOf(x) == -1) {
            if (lastOper == "number" && b === null) {
            inp.val(inp.val() + x);
            a = inp.val();
            lastOper = "number";
        } else if (lastOper !== "number") {
                inp.val("");
                inp.val(0 + x);
                b = inp.val();
                lastOper = "number";
            } else {
                    inp.val(inp.val() + x);
                    b = inp.val();
                    lastOper = "number";
                }
        } else if (inp.val().indexOf(x) != -1 && lastOper != "number") {
                inp.val("");
                inp.val(0 + x);
                b = inp.val();
                lastOper = "number";
                }
        }
};

$('#b1').click(function () {
        clickNumber('1');
    });
$('#b2').click(function () {
        clickNumber('2');
    });
$('#b3').click(function () {
        clickNumber('3');
    });
$('#b4').click(function () {
        clickNumber('4');
    });
$('#b5').click(function () {
        clickNumber('5');
    });
$('#b6').click(function () {
        clickNumber('6');
    });
$('#b7').click(function () {
        clickNumber('7');
    });
$('#b8').click(function () {
        clickNumber('8');
    });
$('#b9').click(function () {
        clickNumber('9');
    });
$('#zero').click(function () {
        clickNumber('0');
    });
//-------------------- operations:
$('#rst').click(function () {
        resetForm();
    });
$('#pls').click(function () {
        plus();
    });
$('#min').click(function () {
        minus();
    });
$('#result').click(function () {
        equal();
    });
$('#dvd').click(function () {
        divide();
    });
$('#mltpl').click(function () {
        multiply();
    });
$('#negtv').click(function () {
        negativNum();
    });
$('#point').click(function () {
        clickPoint();
    });
