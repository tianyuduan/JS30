let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  const now = Date.now();
  console.log(now);
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    //in milliseconds, have to convert
    const secsLeft = Math.round((then - Date.now()) / 1000);
    // console.log(secsLeft);

    // if secsLeft is less than zero you want to stop it
    if(secsLeft <= 0 ){
      clearInterval(countdown);
    }

    // console.log(secsLeft);
    displayTimeLeft(secsLeft);
  }, 1000);
}


function displayTimeLeft(seconds) {
  const mins = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${mins}:${remainderSeconds}`;
    // console.log(mins);

  timerDisplay.textContent = display;

    // console.log(display);
}
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
// timer(120);
