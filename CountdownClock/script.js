let countdown;

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

    console.log(secsLeft);
  }, 1000);
}


function displayTimeLeft(seconds) {
  const mins = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
    console.log(mins);
}
timer(5);
