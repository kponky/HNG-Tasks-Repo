<<<<<<< HEAD
const currentUTCTime = document.querySelector('.time');
const currentDayElement = document.querySelector('.day');
=======
const currentTimeDisplay = document.getElementById('currentTime');
const currentDayDisplay = document.getElementById('currentDay');
>>>>>>> 9fa665b9c24099b5ee0f33c09cc74365aa0a2ba8
const nav = document.querySelector('nav');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
<<<<<<< HEAD
  if (window.scrollY > 60) { // Adjust the scroll value as needed
=======
  if (window.scrollY > 50) { // Adjust the scroll value as needed
>>>>>>> 9fa665b9c24099b5ee0f33c09cc74365aa0a2ba8
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
  const daysOfWeek = 
  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[day]; 

  let hours = now.getHours(); 
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM'; 
  hours = hours % 12; 
  hours = hours ? hours : 12;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  currentUTCTime.textContent = formattedTime;
  currentDayElement.textContent = currentDay;
}

updateTime();

setInterval(updateTime, 60000); 