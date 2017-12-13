// Get our Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

console.log(player);


// build our functions
function togglePlay(){
  // const playing = video.paused ? 'play' : 'pause';
  // video[playing]();
  if (video.paused){
    video.play();
  }
  else {
    video.pause();
  }
}

function updatePlayButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;

}
// hook up event listenrs
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
toggle.addEventListener('click', togglePlay);
