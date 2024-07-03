const currentTimeDisplay = document.getElementById('currentTime');
const currentDayDisplay = document.getElementById('currentDay');

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