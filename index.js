setInterval(() => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();

    let h = 30 * hrs + mins / 2;
    let m = 6 * mins;
    let s = 6 * sec;

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let second = document.getElementById('second');

    hours.style.transform = `rotate(${h}deg)`;
    minutes.style.transform = `rotate(${m}deg)`;
    second.style.transform = `rotate(${s}deg)`;

}, 1000);