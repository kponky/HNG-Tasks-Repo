const currentUTCTime = document.querySelector('.time');
const currentDayElement = document.querySelector('.day');

const nav = document.querySelector('nav');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('smaller');
    footer.classList.add('smaller');
  } else {
    nav.classList.remove('smaller');
    footer.classList.remove('smaller');
  }
});

function updateTime() {
  const now = new Date(); 

  const day = now.getDay();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[day]; 

  let hours = now.getHours(); 
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM'; 
  hours = hours % 12; 
  hours = hours ? hours : 12;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  const dateInMS = now.getTime();

  currentUTCTime.innerHTML = ` UTC Time: ${dateInMS}`;
  currentDayElement.textContent = `Day: ${currentDay}`;
}

updateTime();
setInterval(updateTime, 60000);
