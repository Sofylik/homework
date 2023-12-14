function clock() {
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('min');

    let h = new Date().getHours();
    let m = new Date().getMinutes();

    //Add 0 front of numbers if number is less than 10

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    hours.innerHTML = h;
    minutes.innerHTML = m;
}

var interval = setInterval(clock, 1000);