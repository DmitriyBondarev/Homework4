$("#resTest").click(function () {                          //расчет баллов
    var summ = 0;
    var right = $('#r1, #r7, #r12, #ch2, #ch4, #ch5, #ch6');
    var wrongCh = $('#ch1, #ch3, #ch7, #ch8');
    for (i = 0; i < right.length; i++) {                
        if (right[i].getAttribute("type") == "radio") {
             if (right[i].checked == true) {            //действие для прав. радио.
            summ += 2;
            }
        } else {
            if (right[i].checked == true) {         //действие для прав. чекбокса.
            summ += 1;
            }
    }   
}
    var percent = summ * 10;                         //процент прав. ответов
    for (i = 0; i < wrongCh.length; i++) {
    if (wrongCh[i].checked == true) {            //действие для НЕправ. чекбокса.
        summ -= 1;
        
    }
}
    if (summ < 0) {                             //исключим результат меньше ноля.
        summ = 0;
        alert("неужели все так плохо?..")
    }
    alert("Вы набрали " + summ + ' баллов из 10. Процент правильных ответов = ' + percent + " %.");
    summ = 0;
});
