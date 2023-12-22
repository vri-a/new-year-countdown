function countdown() {
    const time = document.querySelectorAll('#time');
    const date = new Date();
    const newYear = new Date(`1 Jan ${date.getFullYear() + 1}`);
    const dif = (newYear - date) / 1000;
  
    time[0].innerHTML = Math.floor(dif / 3600 / 24);
    time[1].innerHTML = formatTime(Math.floor(dif / 3600) % 24);
    time[2].innerHTML = formatTime(Math.floor(dif / 60) % 60);
    time[3].innerHTML = formatTime(Math.floor(dif) % 60);
}

function formatTime(t) {
    return t < 10 ? `0${t}` : t;
}

countdown();
setInterval(countdown, 1000);

function getNumberDay() {
    const date = new Date();
    let num = date.getDate() - 1;
    formatDay(num);
    
    if(date.getMonth() === 0 && num === 0) formatDay(31);
};

function formatDay(num) {
    const days = document.querySelectorAll('.day');

    // Original color
    colors('#242038', '#ffffff9c', days, num);

    // Highlight day
    days[num].style.background = '#8d86c8';

    // Days gone
    let daysGone = [...days]
    daysGone = daysGone.filter(day => day.innerHTML <= num);
    colors('#8d86c8', '#ffffff9c', daysGone, num);

};

function colors(color, background, arr, num) {
    if(num !== 31) {
        arr.forEach(i => {
        i.style.color = color;
        i.style.background = background;
    });

    }
}

getNumberDay();
setInterval(getNumberDay, 1000);

// Get country
const countryName = document.getElementById('country');
const infoDate = new Date().toTimeString().split(' ');
let country = infoDate.slice(2, ).join(' ');
country = country.slice(1, -1);
countryName.innerHTML += country;

//Get month
function getMonth() {
    const num = new Date().getMonth();
    const month = document.getElementById('month');
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    month.innerHTML = months[num];
   
};

getMonth();
setInterval(getMonth, 1000);



