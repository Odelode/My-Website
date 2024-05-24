var countdownElement = document.getElementById('countdown');
var targetDate = new Date('2024-06-07T15:15:00');

var countdownInterval = setInterval(function() {
    var now = new Date();
    var distance = targetDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var milliseconds = distance % 1000; 
    
    countdownElement.innerText = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ' + milliseconds + 'ms';

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerText = 'The time has come!';
    }
}, 1);

var countdownElement2 = document.getElementById('countdown2');
var targetDate2 = new Date('2025-06-20T12:00:00'); 
var countdownInterval2 = setInterval(function() {
    var now = new Date();
    var distance = targetDate2 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var milliseconds = distance % 1000;

    countdownElement2.innerText = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ' + milliseconds + 'ms';

    if (distance < 0) {
        clearInterval(countdownInterval2);
        countdownElement2.innerText = 'The second time has come!';
    }
}, 1);
