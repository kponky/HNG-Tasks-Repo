const currentTimeDisplay = document.getElementById('currentTime');
const currentDayDisplay = document.getElementById('currentDay');
const nav = document.querySelector('nav');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) { // Adjust the scroll value as needed
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

  currentTimeDisplay.textContent = formattedTime;
  currentDayDisplay.textContent = currentDay;
}

updateTime();

setInterval(updateTime, 60000); 