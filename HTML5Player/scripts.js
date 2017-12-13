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


function skip(){
  console.log("im skipping");
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
  console.log(this.value);
  video[this.name ] = this.value;
}

function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;

}

function scrub(e){
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// hook up event listenrs
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
toggle.addEventListener('click', togglePlay);
toggle.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => {
  mousedown = true;
});
progress.addEventListener('mouseup', () => {
  mousedown = false;
});
